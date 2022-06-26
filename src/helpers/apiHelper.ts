import {
  GetCurrentWeatherResponseType,
  GetWeekForecastWeatherResponseType,
  SearchCityResponse,
} from '../types/apiHelperTypes';

const API_BASE = 'https://api.weatherapi.com/v1';

const apiHelper = {
  searchCity: async (city: string) => {
    let res = await fetch(
      `${API_BASE}/search.json?key=${process.env.REACT_APP_API_KEY}&q=${city}`
    );
    let data: SearchCityResponse = await res.json();
    return data;
  },

  getCurrentWeather: async (city: string) => {
    let res = await fetch(
      `${API_BASE}/current.json?key=${process.env.REACT_APP_API_KEY}&q=${city}`
    );
    let data: GetCurrentWeatherResponseType = await res.json();
    return data;
  },

  getWeekForecastWeather: async (city: string) => {
    let res = await fetch(
      `${API_BASE}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&days=7`
    );
    let data: GetWeekForecastWeatherResponseType = await res.json();
    return data;
  },

  getWeatherDataByIp: async () => {
    let res = await fetch(
      `${API_BASE}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=auto:ip`
    );
    let data: GetWeekForecastWeatherResponseType = await res.json();
    return data;
  },
};

export default apiHelper;
