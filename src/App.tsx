import React, { useState } from 'react';
import SearchLocation from './Components/SearchLocation';
import ShowCurrentWeather from './Components/ShowCurrentWeather';
import { WeatherDataType } from './types/mainTypes';

function App() {
  const [weatherData, setWeatherData] = useState<WeatherDataType>(['']);

  return (
    <>
      <SearchLocation setWeatherData={setWeatherData} />
      <ShowCurrentWeather weatherData={['']} />
    </>
  );
}

export default App;
