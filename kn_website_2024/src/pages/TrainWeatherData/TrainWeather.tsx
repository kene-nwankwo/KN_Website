import MinutelyForecast from './WeatherChart';
import TrainData from './TrainData';
import './TrainWeather.css';

export default function TrainWeather() {
  return (<div>
    <div className="train-weather-container">
      <div className="train-weather-item"><TrainData origin="Lovers Lane Station, Dallas, TX" destination="Pearl/Arts District Station, Dallas, TX" /></div>
      <div className="train-weather-item"><TrainData origin="Pearl/Arts District Station, Dallas, TX" destination="Lovers Lane Station, Dallas, TX" /></div>
      <div className="train-weather-item"> <MinutelyForecast /></div>
    </div>

  </div>)}