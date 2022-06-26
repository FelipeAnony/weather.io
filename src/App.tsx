import React, { useState } from 'react';
import SearchLocation from './Components/SearchLocation';
import ShowCurrentWeather from './Components/ShowCurrentWeather';
import { WeatherDataType } from './types/mainTypes';

function App() {
  const [weatherData, setWeatherData] = useState<WeatherDataType>(['']);
  const [city, setCity] = useState('');

  return (
    <>
      <SearchLocation setCity={setCity} />
      <ShowCurrentWeather weatherData={['']} />
    </>
  );
}

//é muito importante ter muito claro em mente o que um componente deve fazer para evitar de sobrecarrega-lo com tarefas de outros
//quanto mais desacoplado e independente, mais mantenivel e mais limpo o codigo

export default App;
