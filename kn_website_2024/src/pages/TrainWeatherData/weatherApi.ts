import TestWeatherJson from "./data/testWeatherData.json";
import { getBackendUrl, WEATHER_CONFIG } from "./config";

export type MinuteForecast = {
  dt: number;     // Unix timestamp
  precipitation: number; // mm of rain/snow expected
};

export async function fetchWeatherData(): Promise<MinuteForecast[]> {
  if (WEATHER_CONFIG.useTestData && process.env.NODE_ENV === 'development') {
    return TestWeatherJson.minutely || [];
  }

  const { latitude, longitude } = WEATHER_CONFIG.coordinates;
  const url = `${getBackendUrl(WEATHER_CONFIG.apiPath)}?latitude=${latitude}&longitude=${longitude}`;

  try {
    const response = await fetch(url);
    const json = await response.json();
    return json.minutely || [];
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return [];
  }
}
