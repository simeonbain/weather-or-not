interface WeatherData {
  today: {
    currentTemp?: number;
    minTemp?: number;
    maxTemp?: number;
    conditions?: string;
    isDaytime?: boolean;
  };
  forecast: Array<{ dayName: string; temp: number; conditions: string }>;
}

export default WeatherData;
