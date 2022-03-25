import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { setWeatherData } from '../slices/weatherSlice';
import { setLocationData } from '../slices/locationSlice';
import { setStartup } from '../slices/appSlice';
import fetchLocationData from '../utilities/fetchLocationData';
import fetchWeatherData from '../utilities/fetchWeatherData';

import './LocationInput.css';

export default function LocationInput() {
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState('');

  const isAppInStartup = useAppSelector((state) => state.app.isAppInStartup);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit: React.MouseEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    (async () => {
      try {
        const locationData = await fetchLocationData(inputValue);
        if (locationData.lat && locationData.lon) {
          const weatherData = await fetchWeatherData(locationData.lat, locationData.lon);
          dispatch(setLocationData(locationData));
          dispatch(setWeatherData(weatherData));
          if (isAppInStartup) {
            dispatch(setStartup(false));
          }
          setInputValue('');
        }
      } catch (e) {
        dispatch(setLocationData(null));
        dispatch(setWeatherData(null));
        setInputValue('');
        console.log(e);
      }
    })();

    setInputValue('Finding...');
  };

  return (
    <div className="location">
      <form onSubmit={handleSubmit}>
        <h3>LOCATION</h3>
        <input name="location" type="text" value={inputValue} onChange={handleChange}></input>
        <button type="submit">&#8674;</button>
      </form>
    </div>
  );
}
