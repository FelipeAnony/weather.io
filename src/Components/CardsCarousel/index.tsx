import { WeatherDataType } from '../../types/mainTypes';
import WeatherCard from '../WeatherCard';

type Props = {
  weatherData: WeatherDataType;
};

function CardsCarousel({ weatherData }: Props) {
  return (
    <>
      {weatherData.map((e) => (
        <WeatherCard
          dataToShow={{ city: 'London', weekDay: 'Monday', temperature: '22' }}
        />
      ))}
    </>
  );
}

export default CardsCarousel;
