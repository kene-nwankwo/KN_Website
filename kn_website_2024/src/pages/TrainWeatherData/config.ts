export type TrainRoute = {
  id: string;
  origin: string;
  destination: string;
  fixture: "departures1" | "departures2";
};

export type ApiEnvironment = "auto" | "local" | "prod";

const PRODUCTION_BACKEND_URL = "https://demobackend-production-3f3f.up.railway.app";
const LOCAL_BACKEND_URL = "http://localhost:8080";

export const API_ENVIRONMENT: ApiEnvironment = "auto";

export const TRAIN_CONFIG = {
  apiPath: "/mapsData",
  routes: [
    {
      id: "lovers-lane-to-pearl-arts-district",
      origin: "Lovers Lane Station, Dallas, TX",
      destination: "Pearl/Arts District Station, Dallas, TX",
      fixture: "departures1",
    },
    {
      id: "pearl-arts-district-to-lovers-lane",
      origin: "Pearl/Arts District Station, Dallas, TX",
      destination: "Lovers Lane Station, Dallas, TX",
      fixture: "departures2",
    },
  ] satisfies TrainRoute[],
  searchWindowMinutes: 45,
  useTestData: true,
};

export const WEATHER_CONFIG = {
  apiPath: "/weatherData",
  coordinates: {
    latitude: 32.7767,
    longitude: -96.797,
  },
  useTestData: true,
};

export function getBackendUrl(apiPath: string): string {
  const environment = API_ENVIRONMENT === "auto"
    ? process.env.NODE_ENV === "development" ? "local" : "prod"
    : API_ENVIRONMENT;
  const backendUrl = environment === "local"
    ? LOCAL_BACKEND_URL
    : PRODUCTION_BACKEND_URL;

  return `${backendUrl}${apiPath}`;
}
