import MinutelyForecast from './WeatherChart';
import TrainData from './TrainData';
import { TRAIN_CONFIG } from './config';
import './styles/TrainWeather.css';

export default function TrainWeatherPage() {
  return (
    <main className="train-weather-page">
      <h1>Train Weather</h1>
      <div className="train-weather-container">
        {TRAIN_CONFIG.routes.map((route) => (
          <section className="train-weather-item" key={route.id}>
            <TrainData route={route} />
          </section>
        ))}
        <section className="train-weather-item train-weather-forecast">
          <MinutelyForecast />
        </section>
      </div>
    </main>
  );
}