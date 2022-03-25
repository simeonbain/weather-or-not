import { useAppSelector } from '../hooks';

import './Forecast.css';
import ItemIcon from './ItemIcon';
import ConditionsIcon from './ConditionsIcon';
import isItemRequired from '../utilities/isItemRequired';

export default function Forecast() {
  const itemName = useAppSelector((state) => state.item.name);
  const [weatherDataAvailable, forecastData] = useAppSelector((state) => [
    state.weather.dataAvailable,
    state.weather.data.forecast
  ]);

  if (weatherDataAvailable) {
    return (
      <div className="forecast">
        {forecastData.map((day) => {
          return (
            <div className="day" key={day.dayName}>
              <div
                className={
                  isItemRequired(itemName, day.temp, day.conditions)
                    ? 'day__item--active'
                    : 'day__item--inactive'
                }
              >
                <ItemIcon itemName={itemName}></ItemIcon>
              </div>

              <h3>{day.dayName.toUpperCase()}</h3>
              <h2 className="day__temp">{day.temp}&deg;C</h2>
              <div className="day__condition">
                <ConditionsIcon conditionsName={day.conditions} />
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <h2 className="forecast--error">Weather data couldn't be found for that location</h2>;
  }
}
