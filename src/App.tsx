import React, { useEffect, useState } from 'react';
import SearchLocation from './Components/SearchLocation';
import { WeatherDataType } from './types/mainTypes';
import apiHelper from './helpers/apiHelper';
import WeatherCard from './Components/WeatherCard';

function App() {
  const [WeatherData, setWeatherData] = useState<WeatherDataType>();
  const [city, setCity] = useState('');

  useEffect(() => {
    const getWeatherDataByUserIp = async () => {
      try {
        const data = await apiHelper.getWeatherDataByIp();
        if (data.current) {
          setWeatherData(data);
        }
      } catch (error) {
        console.log('error');
      }
    };
    getWeatherDataByUserIp();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await apiHelper.getWeekForecastWeather(city);
        if (data.current) {
          setWeatherData(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (city) {
      loadData();
    }
  }, [city]);

  return (
    <>
      <SearchLocation setCity={setCity} />
    </>
  );
}

export default App;
