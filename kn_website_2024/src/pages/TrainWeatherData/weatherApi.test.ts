import { fetchWeatherData, parseWeatherResponse } from "./weatherApi";

describe("weather API", () => {
  it("parses minutely forecast data", () => {
    expect(parseWeatherResponse({
      minutely: [{ dt: 1_000, precipitation: 0.4 }],
    })).toEqual([{ dt: 1_000, precipitation: 0.4 }]);
  });

  it("returns an empty forecast for a missing minutely response", () => {
    expect(parseWeatherResponse({})).toEqual([]);
  });

  it("loads weather data from the API", async () => {
    const fetchMock = jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({ minutely: [{ dt: 1_000, precipitation: 0.4 }] }),
    } as Response);

    await expect(fetchWeatherData()).resolves.toEqual([
      { dt: 1_000, precipitation: 0.4 },
    ]);
    expect(fetchMock).toHaveBeenCalled();
    fetchMock.mockRestore();
  });

  it("throws when the weather API responds unsuccessfully", async () => {
    const fetchMock = jest.spyOn(global, "fetch").mockResolvedValue({
      ok: false,
      status: 502,
    } as Response);

    await expect(fetchWeatherData()).rejects.toThrow("502");
    fetchMock.mockRestore();
  });
});
