import { WeatherDataType } from '../../types/mainTypes';
import '../../css/showCurrentWeather.css';

type Props = {
  weatherData: WeatherDataType;
};

function ShowCurrentWeather({ weatherData }: Props) {
  return (
    <>
      {weatherData.current.temp_c}
      <p>{weatherData.location.name}</p>
    </>
  );
}

export default ShowCurrentWeather;
