import departures1 from "../test-data/testdepartures1.json";
import departures2 from "../test-data/testdepartures2.json";
import { getBackendUrl, TRAIN_CONFIG } from "../config";
import type { TrainRoute } from "../config";
import type { Departure, MapsResponse, RouteLeg } from "../types/trainTypes";

const fixtureDepartures: Record<TrainRoute["fixture"], Departure[]> = {
  departures1,
  departures2,
};

function getFixtureDepartures(fixture: TrainRoute["fixture"]): Departure[] {
  return fixtureDepartures[fixture];
}

export function mapRouteLegToDeparture(leg: RouteLeg): Departure {
  return {
    departureTime: leg.departure_time?.text ?? "N/A",
    departureTimeEpochSeconds: leg.departure_time?.value ?? 0,
    arrivalTime: leg.arrival_time?.text ?? "N/A",
    line: leg.steps
      ?.map((step) => step.transit_details?.line?.name)
      .find((name): name is string => name !== undefined) ?? "N/A",
  };
}

export function getNextSearchTime(
  searchTimeSec: number,
  departures: Departure[],
): number | null {
  const lastDeparture = departures[departures.length - 1];
  if (!lastDeparture || lastDeparture.departureTimeEpochSeconds <= searchTimeSec) {
    return null;
  }

  return lastDeparture.departureTimeEpochSeconds + 60;
}

export function deduplicateDepartures(departures: Departure[]): Departure[] {
  const uniqueDepartures = new Map<string, Departure>();

  departures.forEach((departure) => {
    const key = `${departure.departureTimeEpochSeconds}-${departure.line}`;
    uniqueDepartures.set(key, departure);
  });

  return Array.from(uniqueDepartures.values());
}

function buildDeparturesUrl(
  backendUrl: string,
  origin: string,
  destination: string,
  departureTimeSec: number,
): string {
  const searchParams = new URLSearchParams({
    origin,
    destination,
    departureTime: String(departureTimeSec),
  });

  return `${backendUrl}?${searchParams.toString()}`;
}

async function fetchDeparturesAtTime(
  backendUrl: string,
  origin: string,
  destination: string,
  departureTimeSec: number,
  signal?: AbortSignal,
): Promise<Departure[]> {
  const url = buildDeparturesUrl(backendUrl, origin, destination, departureTimeSec);
  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(`Train API request failed with status ${response.status}`);
  }

  const mapsResponse: MapsResponse = await response.json();
  const routeLegs = mapsResponse.routes?.[0]?.legs ?? [];
  return routeLegs.map(mapRouteLegToDeparture);
}

export async function fetchDeparturesWithinWindow(
  route: TrainRoute,
  signal?: AbortSignal,
): Promise<Departure[]> {
  if (TRAIN_CONFIG.useTestData && process.env.NODE_ENV === "development") {
    return deduplicateDepartures(getFixtureDepartures(route.fixture));
  }

  const nowSec = Math.floor(Date.now() / 1000);
  const windowEndSec = nowSec + TRAIN_CONFIG.searchWindowMinutes * 60;
  const backendUrl = getBackendUrl(TRAIN_CONFIG.apiPath);
  const departures: Departure[] = [];
  let searchTimeSec = nowSec;

  while (searchTimeSec < windowEndSec) {
    const newDepartures = await fetchDeparturesAtTime(
      backendUrl,
      route.origin,
      route.destination,
      searchTimeSec,
      signal,
    );

    if (newDepartures.length === 0) {
      break;
    }

    departures.push(...newDepartures);

    const nextSearchTimeSec = getNextSearchTime(searchTimeSec, newDepartures);
    if (nextSearchTimeSec === null) {
      break;
    }

    searchTimeSec = nextSearchTimeSec;
  }

  return deduplicateDepartures(departures);
}
