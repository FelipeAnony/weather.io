import React, { useEffect, useState } from 'react';

import { WeatherDataType } from './types/mainTypes';

import SearchLocation from './Components/SearchLocation';
import WeatherCard from './Components/WeatherCard';

import apiHelper from './helpers/apiHelper';

function App() {
  const [WeatherData, setWeatherData] = useState<WeatherDataType | null>(null);
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
      {WeatherData &&
        WeatherData.week.map((e, i) => {
          if (i === 0)
            return (
              <WeatherCard day="current" dataToShow={WeatherData.current} />
            );
          return <WeatherCard key={e.date} dataToShow={e} />;
        })}
    </>
  );
}

export default App;
