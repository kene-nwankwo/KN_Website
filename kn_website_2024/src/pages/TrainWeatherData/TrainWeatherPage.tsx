import MinutelyForecast from './WeatherChart';
import TrainData from './TrainData';
import { TRAIN_CONFIG } from './config';
import './styles/TrainWeather.css';

export default function TrainWeatherPage() {
  return (<div>
    <div className="train-weather-container">
      {TRAIN_CONFIG.routes.map((route) => (
        <div className="train-weather-item" key={route.id}>
          <TrainData route={route} />
        </div>
      ))}
      <div className="train-weather-item"> <MinutelyForecast /></div>
    </div>

  </div>)}