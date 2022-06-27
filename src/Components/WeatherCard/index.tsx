import '../../css/weatherCard.css';
import { dateFormatter } from '../../helpers/dateFormatterHelper';

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
  size?: 'big';
};

function WeatherCard({ dataToShow, size }: Props) {
  return (
    <section className={size === 'big' ? 'weatherCard' : 'weatherCard--small'}>
      <p className="weatherCard__location">{dataToShow.location}</p>
      <div className="weatherCard__innerContainer">
        <div className={'weatherCard__imageContainer'}>
          <img src={dataToShow.icon} alt={dataToShow.altText}></img>
        </div>
        <div className="weatherCard__temp">
          <p>{dataToShow.temp_c}</p>º<small>c</small>
        </div>
      </div>
      <p className="weatherCard__date">{dateFormatter(dataToShow.date)}</p>
    </section>
  );
}

export default WeatherCard;
