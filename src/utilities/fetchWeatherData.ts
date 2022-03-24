import appConstants from '../constants/appConstants';
import WeatherData from '../types/WeatherData';

async function fetchWeatherData(lat: number, lon: number): Promise<WeatherData> {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=${appConstants.OPEN_WEATHER_API_KEY}`
  );
  if (!response.ok) {
    const message = `An error occured: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();
  const processedData = processWeatherData(data);

  return {
    today: processedData.today,
    forecast: processedData.forecast
  };
}

function processWeatherData(data: any) {
  const today = {
    currentTemp: Math.round(data.current.temp),
    maxTemp: Math.round(data.daily[0].temp.max),
    minTemp: Math.round(data.daily[0].temp.min),
    conditions: data.current.weather[0].main.toLowerCase(),
    isDay: data.current.dt > data.current.sunrise && data.current.dt < data.current.sunset
  };

  const forecast = data.daily.map((day: any) => {
    const unixDate = day.dt;
    const date = new Date(unixDate * 1000);

    return {
      dayName: getDayName(date),
      temp: Math.round(day.temp.max),
      conditions: day.weather[0].main.toLowerCase()
    };
  });
  forecast.shift();

  return {
    today,
    forecast
  };
}

function getDayName(date: Date) {
  switch (date.getDay()) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      return;
  }
}

export default fetchWeatherData;
