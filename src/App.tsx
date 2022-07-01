import React, { useEffect, useState } from 'react';

import { WeatherDataType } from './types/mainTypes';

import SearchLocation from './Components/SearchLocation';
import WeatherCard from './Components/WeatherCard';

import apiHelper from './helpers/apiHelper';
import Switch from './Components/Switch';
import Loading from './Components/Loading';

function App() {
  const [WeatherData, setWeatherData] = useState<WeatherDataType | null>(null);
  const [city, setCity] = useState('');
  const [unit, setUnit] = useState<'celsius' | 'fahrenheit'>('celsius');

  useEffect(() => {
    const getWeatherDataByUserIp = async () => {
      try {
        const data = await apiHelper.getWeatherDataByIp();
        if (data.current) {
          setWeatherData(data);
        }
      } catch (error) {
        console.log(error);
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
    <main>
      <SearchLocation setCity={setCity} />
      <Switch setValue={setUnit} value={unit} />
      {WeatherData ? (
        WeatherData.week.map((e, i) => {
          if (i === 0)
            return (
              <WeatherCard
                key={i}
                day="current"
                dataToShow={WeatherData.current}
                unit={unit}
              />
            );
          return <WeatherCard key={i} dataToShow={e} unit={unit} />;
        })
      ) : (
        <Loading message="Loading data by your current location..." />
      )}
    </main>
  );
}

export default App;
