interface Weather {
  today: {
    currentTemp?: number;
    minTemp?: number;
    maxTemp?: number;
    conditions?: string;
    isDaytime?: boolean;
  };
  forecast: Array<{ day: string; temp: number; conditions: string }>;
}

export default Weather;
