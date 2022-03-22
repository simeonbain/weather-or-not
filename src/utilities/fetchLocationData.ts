import appConstants from '../constants/appConstants';

async function fetchLocationData(location: string): Promise<{ lat: number; lon: number }> {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${appConstants.OPEN_WEATHER_API_KEY}`
  );
  if (!response.ok) {
    const message = `An error occured: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();
  return {
    lat: data.lat,
    lon: data.lon
  };
}

export default fetchLocationData;
