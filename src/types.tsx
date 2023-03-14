export interface ClimateTypes {
  weather: { current_weather: { weathercode: number; temperature: string } };
  name: string;
}

export interface resultTypes {
  result: {
    weather: ClimateTypes;
  };
}
