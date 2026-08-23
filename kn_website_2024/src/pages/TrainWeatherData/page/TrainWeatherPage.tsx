import { useState } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Button } from '@mui/material';
import MinutelyForecast from '../components/WeatherChart';
import TrainData from '../components/TrainData';
import { TRAIN_CONFIG } from '../config';
import '../styles/TrainWeather.css';

export default function TrainWeatherPage() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <main className="train-weather-page">
      <div className="train-weather-page-header">
        <h1>Train Weather</h1>
        <Button
          type="button"
          variant="outlined"
          startIcon={<RefreshIcon />}
          onClick={() => setRefreshKey((key) => key + 1)}
        >
          Refresh data
        </Button>
      </div>
      <div className="train-weather-container">
        {TRAIN_CONFIG.routes.map((route) => (
          <section className="train-weather-item" key={route.id}>
            <TrainData route={route} refreshKey={refreshKey} />
          </section>
        ))}
        <section className="train-weather-item train-weather-forecast">
          <MinutelyForecast refreshKey={refreshKey} />
        </section>
      </div>
    </main>
  );
}