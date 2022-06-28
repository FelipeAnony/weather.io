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
  day?: 'current';
};

function WeatherCard({ dataToShow, day }: Props) {
  return (
    <section className={'weatherCard'}>
      <span className="weatherCard__location">{dataToShow.location}</span>
      <div className="weatherCard__innerContainer">
        <div className={'weatherCard__imageContainer'}>
          <img src={dataToShow.icon} alt={dataToShow.altText} />
        </div>
        <div className="weatherCard__temp">
          {day ? (
            <span>
              {dataToShow.temp_c} º<small>c</small>
            </span>
          ) : (
            <>
              <span>{dataToShow.maxTemp_c}</span>
              <span>{dataToShow.minTemp_c}</span>
            </>
          )}
        </div>
      </div>
      <time className="weatherCard__date">
        {dateFormatter(dataToShow.date)}
      </time>
    </section>
  );
}

export default WeatherCard;
