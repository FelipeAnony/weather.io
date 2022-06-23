import '../../css/weatherCard.css';

type Props = {
  dataToShow: {
    city: string;
    weekDay: string;
    temperature: string;
  };
};

function WeatherCard({ dataToShow }: Props) {
  return (
    <div className="weatherCard">
      <div className="weatherCard__imageContainer">
        <img alt="Weather condition"></img>
      </div>
      <div className="weatherCard__info">
        <p>{dataToShow.city}</p>
        <p>{dataToShow.weekDay}</p>
        <p>{dataToShow.temperature}</p>
      </div>
    </div>
  );
}

export default WeatherCard;
