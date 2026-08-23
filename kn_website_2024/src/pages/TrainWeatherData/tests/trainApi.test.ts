import {
  deduplicateDepartures,
  fetchDeparturesWithinWindow,
  getNextSearchTime,
  mapRouteLegToDeparture,
} from "../api/trainApi";
import type { TrainRoute } from "../config";
import type { Departure } from "../types/trainTypes";

const route: TrainRoute = {
  id: "test-route",
  origin: "Origin Station",
  destination: "Destination Station",
  fixture: "departures1",
};

const departure = (overrides: Partial<Departure> = {}): Departure => ({
  departureTime: "1:00 PM",
  departureTimeEpochSeconds: 1_000,
  arrivalTime: "1:10 PM",
  line: "Red Line",
  ...overrides,
});

describe("train API helpers", () => {
  it("maps route legs into departures", () => {
    expect(mapRouteLegToDeparture({
      departure_time: { text: "1:00 PM", value: 1_000 },
      arrival_time: { text: "1:10 PM", value: 1_600 },
      steps: [{ transit_details: { line: { name: "Red Line" } } }],
    })).toEqual(departure({ arrivalTime: "1:10 PM", departureTimeEpochSeconds: 1_000 }));
  });

  it("uses fallback values for missing route fields", () => {
    expect(mapRouteLegToDeparture({})).toEqual({
      departureTime: "N/A",
      departureTimeEpochSeconds: 0,
      arrivalTime: "N/A",
      line: "N/A",
    });
  });

  it("removes duplicate departures while preserving order", () => {
    expect(deduplicateDepartures([
      departure(),
      departure(),
      departure({ departureTimeEpochSeconds: 1_600 }),
    ])).toHaveLength(2);
  });

  it("returns the next search time only when progress is possible", () => {
    expect(getNextSearchTime(1_000, [departure({ departureTimeEpochSeconds: 1_600 })])).toBe(1_660);
    expect(getNextSearchTime(1_000, [])).toBeNull();
    expect(getNextSearchTime(1_000, [departure()])).toBeNull();
  });

  it("loads and maps departures from the API", async () => {
    const fetchMock = jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({
        routes: [{
          legs: [{
            departure_time: { text: "1:00 PM", value: 1_000 },
            arrival_time: { text: "1:10 PM", value: 1_600 },
            steps: [{ transit_details: { line: { name: "Red Line" } } }],
          }],
        }],
      }),
    } as Response);

    await expect(fetchDeparturesWithinWindow(route)).resolves.toEqual([
      departure({ arrivalTime: "1:10 PM", departureTimeEpochSeconds: 1_000 }),
    ]);
    expect(fetchMock).toHaveBeenCalled();
    fetchMock.mockRestore();
  });

  it("throws when the train API responds unsuccessfully", async () => {
    const fetchMock = jest.spyOn(global, "fetch").mockResolvedValue({
      ok: false,
      status: 503,
    } as Response);

    await expect(fetchDeparturesWithinWindow(route)).rejects.toThrow("503");
    fetchMock.mockRestore();
  });
});
