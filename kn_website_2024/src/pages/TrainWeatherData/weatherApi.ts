import TestWeatherJson from "./data/testWeatherData.json";

export type MinuteForecast = {
  dt: number;     // Unix timestamp
  precipitation: number; // mm of rain/snow expected
};

export async function fetchWeatherData(): Promise<MinuteForecast[]> {
  const lat = 32.7767; // Dallas
  const lon = -96.7970;
  
  let backEndURL = "https://demobackend-production-3f3f.up.railway.app/weatherData";
  
  // Determine backEndURL based on environment
  backEndURL = process.env.NODE_ENV === 'development'
    ? "http://localhost:8080/weatherData"
    : backEndURL;
  
  // Use test data in development
  const useTestData = false;
  
  if (useTestData && process.env.NODE_ENV === 'development') {
    return TestWeatherJson.minutely || [];
  }
  
  const url = `${backEndURL}?latitude=${lat}&longitude=${lon}`;

  try {
    const response = await fetch(url);
    const json = await response.json();
    return json.minutely || [];
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return [];
  }
}
