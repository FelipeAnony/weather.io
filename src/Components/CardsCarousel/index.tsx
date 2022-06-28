import { WeatherDataType } from '../../types/mainTypes';
import WeatherCard from '../WeatherCard';

type Props = {
  weatherData: WeatherDataType | null;
};

function CardsCarousel({ weatherData }: Props) {
  return (
    <article className="cardsCarousel">
      {weatherData &&
        weatherData.week.map((e, i) => {
          if (i === 0) return '';
          return <WeatherCard key={e.date} dataToShow={e} />;
        })}
    </article>
  );
}

export default CardsCarousel;
