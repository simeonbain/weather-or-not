import { useAppSelector } from '../hooks';

import './Forecast.css';
import ItemIcon from './ItemIcon';
import clearDayImg from '../assets/clear-day.svg';

export default function Forecast() {
  const itemName = useAppSelector((state) => state.item.name);
  const [weatherDataAvailable, forecastData] = useAppSelector((state) => [
    state.weather.dataAvailable,
    state.weather.data.forecast
  ]);

  if (weatherDataAvailable) {
    return (
      <>
        {forecastData.map((day) => {
          return (
            <div className="day" key={day.dayName}>
              <div className="day__item--active">
                <ItemIcon itemName={itemName}></ItemIcon>
              </div>

              <h3>{day.dayName.toUpperCase()}</h3>
              <h2 className="day__temp">{day.temp}&deg;C</h2>
              <div className="day__condition">
                <img src={clearDayImg}></img>
              </div>
            </div>
          );
        })}
      </>
    );
  } else {
    return <></>;
  }
}
