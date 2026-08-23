export type TrainRoute = {
  origin: string;
  destination: string;
};

const PRODUCTION_BACKEND_URL = "https://demobackend-production-3f3f.up.railway.app";
const LOCAL_BACKEND_URL = "http://localhost:8080";

export const TRAIN_CONFIG = {
  apiPath: "/mapsData",
  routes: [
    {
      origin: "Lovers Lane Station, Dallas, TX",
      destination: "Pearl/Arts District Station, Dallas, TX",
    },
    {
      origin: "Pearl/Arts District Station, Dallas, TX",
      destination: "Lovers Lane Station, Dallas, TX",
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
  const backendUrl = process.env.NODE_ENV === "development"
    ? LOCAL_BACKEND_URL
    : PRODUCTION_BACKEND_URL;

  return `${backendUrl}${apiPath}`;
}
