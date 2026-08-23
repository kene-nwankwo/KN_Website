import departures1 from "./data/testdepartures1.json";
import departures2 from "./data/testdepartures2.json";
import { getBackendUrl, TRAIN_CONFIG } from "./config";
import type { Departure, MapsResponse, RouteLeg } from "./trainTypes";

const LOVERS_LANE_STATION = "Lovers Lane Station, Dallas, TX";

function getFixtureDepartures(origin: string): Departure[] {
  return origin === LOVERS_LANE_STATION ? departures1 : departures2;
}

export function mapRouteLegToDeparture(leg: RouteLeg): Departure {
  return {
    departureTime: leg.departure_time?.text || "N/A",
    departureTimeEpochSeconds: leg.departure_time?.value || 0,
    arrivalTime: leg.arrival_time?.text || "N/A",
    line: leg.steps
      ?.map((step) => step.transit_details?.line?.name)
      .find((name): name is string => name !== undefined) || "N/A",
  };
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
): Promise<Departure[]> {
  const url = buildDeparturesUrl(backendUrl, origin, destination, departureTimeSec);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Train API request failed with status ${response.status}`);
  }

  const mapsResponse: MapsResponse = await response.json();
  const routeLegs = mapsResponse.routes?.[0]?.legs ?? [];
  return routeLegs.map(mapRouteLegToDeparture);
}

export async function fetchDeparturesWithinWindow(
  origin: string,
  destination: string,
): Promise<Departure[]> {
  if (TRAIN_CONFIG.useTestData && process.env.NODE_ENV === "development") {
    return getFixtureDepartures(origin);
  }

  const nowSec = Math.floor(Date.now() / 1000);
  const windowEndSec = nowSec + TRAIN_CONFIG.searchWindowMinutes * 60;
  const backendUrl = getBackendUrl(TRAIN_CONFIG.apiPath);
  const departures: Departure[] = [];
  let searchTimeSec = nowSec;

  while (searchTimeSec < windowEndSec) {
    const newDepartures = await fetchDeparturesAtTime(
      backendUrl,
      origin,
      destination,
      searchTimeSec,
    );

    if (newDepartures.length === 0) {
      break;
    }

    departures.push(...newDepartures);

    const lastDeparture = newDepartures[newDepartures.length - 1];
    if (lastDeparture.departureTimeEpochSeconds <= searchTimeSec) {
      break;
    }

    searchTimeSec = lastDeparture.departureTimeEpochSeconds + 60;
  }

  return departures;
}
