import '../../css/weatherCard.css';

type Props = {
  dataToShow: {
    location: string;
    icon: string;
    altText: string;
    date: number;
    temp_c: number;
    temp_f: number;
  };
  size: 'small' | 'big';
};

function WeatherCard({ dataToShow }: Props) {
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
