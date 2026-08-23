import TestWeatherJson from "./data/testWeatherData.json";
import { getBackendUrl, WEATHER_CONFIG } from "./config";

export type MinuteForecast = {
  dt: number;     // Unix timestamp
  precipitation: number; // mm of rain/snow expected
};

export async function fetchWeatherData(signal?: AbortSignal): Promise<MinuteForecast[]> {
  if (WEATHER_CONFIG.useTestData && process.env.NODE_ENV === 'development') {
    return TestWeatherJson.minutely || [];
  }

  const { latitude, longitude } = WEATHER_CONFIG.coordinates;
  const url = `${getBackendUrl(WEATHER_CONFIG.apiPath)}?latitude=${latitude}&longitude=${longitude}`;

  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error(`Weather API request failed with status ${response.status}`);
  }

  const json = await response.json();
  return json.minutely || [];
}
