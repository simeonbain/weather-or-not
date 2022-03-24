import { useAppSelector } from '../hooks';

import './Today.css';
import notAvailableImg from '../assets/not-available.svg';
import ConditionsIcon from './ConditionsIcon';
import conditionsConstants from '../constants/conditionsConstants';

export default function Today() {
  const itemName = useAppSelector((state) => state.item.name);
  const [weatherDataAvailable, todayData] = useAppSelector((state) => [
    state.weather.dataAvailable,
    state.weather.data.today
  ]);

  if (weatherDataAvailable) {
    return (
      <div className="today">
        <div className="today__icon">
          <ConditionsIcon
            conditionsName={todayData.conditions ?? conditionsConstants.NOT_AVAILABLE}
            isDaytime={todayData.isDaytime ?? true}
          />
        </div>
        <h2>
          Bring your {itemName} &nbsp; - &nbsp; it's {todayData.currentTemp} &deg;C and{' '}
          {todayData.conditions}
        </h2>
        <div className="today__divider"></div>
        <div className="today__minmax">
          <div className="today__minmax__min">
            <h3>MIN</h3>
            <h2>{todayData.minTemp}&deg;C</h2>
          </div>
          <div className="today__minmax__max">
            <h3>MAX</h3>
            <h2>{todayData.maxTemp}&deg;C</h2>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="today">
        <div className="today__icon">
          <img src={notAvailableImg}></img>
        </div>
        <h2 className="today__message--error">Weather data could not be found for that location</h2>
      </div>
    );
  }
}
