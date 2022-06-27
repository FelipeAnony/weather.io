import {
  ApiForecastResponseType,
  SearchCityResponse,
} from '../types/apiHelperTypes';
import { WeatherDataType } from '../types/mainTypes';

const API_BASE = 'https://api.weatherapi.com/v1';

const apiHelper = {
  searchCity: async (city: string) => {
    let res = await fetch(
      `${API_BASE}/search.json?key=${process.env.REACT_APP_API_KEY}&q=${city}`
    );
    let data: SearchCityResponse = await res.json();
    return data;
  },

  getWeekForecastWeather: async (city: string): Promise<WeatherDataType> => {
    let res = await fetch(
      `${API_BASE}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&days=7`
    );

    let data: ApiForecastResponseType = await res.json();

    return {
      current: {
        location: data.location.name,
        icon: data.current.condition.icon,
        altText: data.current.condition.text,
        date: data.current.last_updated_epoch,
        temp_c: data.current.temp_c,
        temp_f: data.current.temp_f,
        maxTemp_c: data.forecast.forecastday[0].day.maxtemp_c,
        minTemp_c: data.forecast.forecastday[0].day.mintemp_c,
        maxTemp_f: data.forecast.forecastday[0].day.maxtemp_f,
        minTempf: data.forecast.forecastday[0].day.mintemp_f,
      },
      week: [
        ...data.forecast.forecastday.map((e) => ({
          location: data.location.name,
          icon: e.day.condition.icon,
          altText: e.day.condition.text,
          date: e.date_epoch,
          temp_c: 0,
          temp_f: 0,
          maxTemp_c: e.day.maxtemp_c,
          minTemp_c: e.day.mintemp_c,
          maxTemp_f: e.day.maxtemp_f,
          minTempf: e.day.mintemp_f,
        })),
      ],
    };
  },

  getWeatherDataByIp: async (): Promise<WeatherDataType> => {
    let res = await fetch(
      `${API_BASE}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=auto:ip&days=7`
    );
    let data: ApiForecastResponseType = await res.json();
    return {
      current: {
        location: data.location.name,
        icon: data.current.condition.icon,
        altText: data.current.condition.text,
        date: data.current.last_updated_epoch,
        temp_c: data.current.temp_c,
        temp_f: data.current.temp_f,
        maxTemp_c: data.forecast.forecastday[0].day.maxtemp_c,
        minTemp_c: data.forecast.forecastday[0].day.mintemp_c,
        maxTemp_f: data.forecast.forecastday[0].day.maxtemp_f,
        minTempf: data.forecast.forecastday[0].day.mintemp_f,
      },
      week: [
        ...data.forecast.forecastday.map((e) => ({
          location: data.location.name,
          icon: e.day.condition.icon,
          altText: e.day.condition.text,
          date: e.date_epoch,
          temp_c: 0,
          temp_f: 0,
          maxTemp_c: e.day.maxtemp_c,
          minTemp_c: e.day.mintemp_c,
          maxTemp_f: e.day.maxtemp_f,
          minTempf: e.day.mintemp_f,
        })),
      ],
    };
  },
};

export default apiHelper;
