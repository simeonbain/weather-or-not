import { useAppSelector } from '../hooks';

import './Today.css';
import ConditionsIcon from './ConditionsIcon';
import conditionsConstants from '../constants/conditionsConstants';
import isItemRequired from '../utilities/isItemRequired';

export default function Today() {
  const itemName = useAppSelector((state) => state.item.name);
  const [weatherDataAvailable, todayData, locationData] = useAppSelector((state) => [
    state.weather.dataAvailable,
    state.weather.data.today,
    state.location.data
  ]);

  const getTodayMessage = (
    itemName: string,
    currentTemp: number,
    conditions: string,
    isDaytime = true
  ) => {
    return `${
      isItemRequired(itemName, currentTemp, conditions, isDaytime)
        ? "You'll need your"
        : "You don't need your"
    } ${itemName} \u00A0 - \u00A0 it's ${currentTemp}\u00b0C ${
      conditions === conditionsConstants.CLEAR ? 'and' : 'with'
    } ${conditions} right now`;
  };

  if (weatherDataAvailable) {
    return (
      <div className="today">
        <div className="today__icon">
          <ConditionsIcon
            conditionsName={todayData.conditions ?? conditionsConstants.NOT_AVAILABLE}
            isDaytime={todayData.isDaytime ?? true}
          />
        </div>
        <h3 className="today__location">
          {locationData.name ?? ''}
          {locationData.state ? `, ${locationData.state}` : ''}
          {locationData.countryCode ? `, ${locationData.countryCode}` : ''}
        </h3>
        <h2>
          {todayData.currentTemp && todayData.conditions
            ? getTodayMessage(
                itemName,
                todayData.currentTemp,
                todayData.conditions,
                todayData.isDaytime
              )
            : ''}
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
          <ConditionsIcon conditionsName={conditionsConstants.NOT_AVAILABLE} />
        </div>
      </div>
    );
  }
}
