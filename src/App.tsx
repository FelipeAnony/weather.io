import React, { useState } from 'react';
import SearchLocation from './Components/SearchLocation';
import { WeatherDataType } from './types/mainTypes';

function App() {
  const [weatherData, setWeatherData] = useState<WeatherDataType>([]);

  return (
    <>
      <SearchLocation setWeatherData={setWeatherData} />
    </>
  );
}

export default App;
