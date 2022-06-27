import '../../css/weatherCard.css';
import { WeatherDataType } from '../../types/mainTypes';

type Props = {
  dataToShow: {
    location: string;
    icon: string;
    altText: string;
    date: number;
    temp_c: number;
    temp_f: number;
    maxTemp_c: number;
    minTemp_c: number;
    maxTemp_f: number;
    minTempf: number;
  };
  size: 'small' | 'big';
};

function WeatherCard({ dataToShow, size }: Props) {
  return (
    <div className="weatherCard">
      <div className="weatherCard__imageContainer">
        <img alt="Weather condition"></img>
      </div>
      <div className="weatherCard__info"></div>
    </div>
  );
}

export default WeatherCard;
