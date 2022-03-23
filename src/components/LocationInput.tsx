import { useState } from 'react';
import { useAppDispatch } from '../hooks';
import { setWeatherData } from '../slices/weatherSlice';
import fetchLocationData from '../utilities/fetchLocationData';
import fetchWeatherData from '../utilities/fetchWeatherData';

import './LocationInput.css';

export default function LocationInput() {
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit: React.MouseEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    (async () => {
      try {
        const { lat, lon } = await fetchLocationData(inputValue);
        const weatherData = await fetchWeatherData(lat, lon);
        dispatch(setWeatherData(weatherData));
      } catch (e) {
        dispatch(setWeatherData(null));
        console.log(e);
      }
    })();
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
