import { WeatherDataType } from '../../types/mainTypes';
import '../../css/showCurrentWeather.css';
import WeatherCard from '../WeatherCard';

type Props = {
  weatherData: WeatherDataType;
};

function ShowCurrentWeather({ weatherData }: Props) {
  return (
    <div className="showCurrentWeather">
      {weatherData.map((e) => (
        <WeatherCard
          dataToShow={{ city: 'London', weekDay: 'Monday', temperature: '22' }}
        />
      ))}
    </div>
  );
}

export default ShowCurrentWeather;
