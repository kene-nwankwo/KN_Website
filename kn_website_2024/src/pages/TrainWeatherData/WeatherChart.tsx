import { useEffect, useState } from "react";
import { fetchWeatherData, MinuteForecast } from "./weatherApi";
import { LineChart } from "@mui/x-charts/LineChart";

export default function MinutelyForecast() {
  const [data, setData] = useState<MinuteForecast[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const abortController = new AbortController();
    setIsLoading(true);
    setError(null);

    const getData = async () => {
      try {
        const weatherData = await fetchWeatherData(abortController.signal);
        setData(weatherData);
      } catch (requestError) {
        if (abortController.signal.aborted) {
          return;
        }

        setData([]);
        setError(requestError instanceof Error ? requestError.message : "Unable to load weather data.");
      } finally {
        if (!abortController.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    getData();
    return () => abortController.abort();
  }, [retryCount]);

  if (isLoading) return <div className="train-weather-forecast-content"><h2>Next Hour (Minutely Forecast)</h2><div className="train-weather-status" role="status">Loading weather data...</div></div>;

  if (error) {
    return (
      <div className="train-weather-forecast-content">
        <h2>Next Hour (Minutely Forecast)</h2>
        <div className="train-weather-status" role="alert">
          <p>Unable to load weather data: {error}</p>
          <button type="button" onClick={() => setRetryCount((count) => count + 1)}>
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (data.length === 0) return <div className="train-weather-forecast-content"><h2>Next Hour (Minutely Forecast)</h2><div className="train-weather-status">No forecast data available.</div></div>;

  const maxPrecip = Math.max(...data.map((d) => d.precipitation), 0);
  
  const precipitationMessage = 
    maxPrecip <= 0.1
      ? "No Precipitation Expected"
      : maxPrecip <= 2.5
      ? "Light Precipitation Expected"
      : maxPrecip <= 10
      ? "Moderate Precipitation Expected"
      : maxPrecip <= 50
      ? "Heavy Precipitation Expected"
      : "Violent Precipitation Expected";

  const chartData = data.slice(0, 60);
  const xAxisData = chartData.map((d) => 
    new Date(d.dt * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );
  const seriesData = chartData.map((d) => d.precipitation);
  
  // Ensure the max is at least 1 to prevent 0 from appearing in the middle
  const yAxisMax = Math.max(maxPrecip, 1);

  // Create background bands for precipitation levels
  const bandSeries = maxPrecip === 0 
    ? [
        {
          type: 'line' as const,
          data: Array(chartData.length).fill(yAxisMax),
          area: true,
          baseline: 0,
          color: 'rgba(144, 238, 144, 0.3)',
          showMark: false,
          label: 'No Rain'
        }
      ]
    : [
        {
          type: 'line' as const,
          data: Array(chartData.length).fill(2.5),
          area: true,
          baseline: 0,
          color: 'rgba(209, 235, 37, 0.3)',
          showMark: false,
          label: 'Light'
        },
        {
          type: 'line' as const,
          data: Array(chartData.length).fill(10),
          area: true,
          baseline: 2.5,
          color: 'rgba(235, 146, 37, 0.3)',
          showMark: false,
          label: 'Moderate'
        },
        {
          type: 'line' as const,
          data: Array(chartData.length).fill(50),
          area: true,
          baseline: 10,
          color: 'rgba(235, 37, 37, 0.3)',
          showMark: false,
          label: 'Heavy'
        },
        {
          type: 'line' as const,
          data: Array(chartData.length).fill(Math.max(yAxisMax, 50)),
          area: true,
          baseline: 50,
          color: 'rgba(147, 51, 234, 0.3)',
          showMark: false,
          label: 'Violent'
        }
      ];

  return (
    <div className="train-weather-forecast-content">
      <h2>Next Hour (Minutely Forecast)</h2>
      <p className="train-weather-forecast-summary">{precipitationMessage}</p>
      <div className="train-weather-chart">
        <LineChart
          xAxis={[{ 
            data: xAxisData, 
            scaleType: 'point',
            label: 'Time'
          }]}
          yAxis={[{
            min: 0,
            max: yAxisMax
          }]}
          series={[
            ...bandSeries,
            {
              type: 'line' as const,
              data: seriesData,
              label: 'Precipitation (mm/Hour)',
              color: '#2563eb',
              curve: 'linear',
              showMark: false
            },
          ]}
          height={300}
          sx={{
            "& .MuiChartsAxis-tickLabel, & .MuiChartsAxis-label, & .MuiChartsLegend-label": {
              fill: "var(--color-text)",
            },
          }}
        />
      </div>
    </div>
  );
}
