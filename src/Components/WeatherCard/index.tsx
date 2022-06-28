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
        <div
          className={day ? 'weatherCard__temp--current' : 'weatherCard__temp'}
        >
          {day ? (
            <span className="weatherCard__ctemp">
              {dataToShow.temp_c} <small>ºc</small>
            </span>
          ) : (
            <>
              <span className="weatherCard__maxtemp">
                {dataToShow.maxTemp_c} <small>ºc</small>
              </span>
              <span className="weatherCard__mintemp">
                {dataToShow.minTemp_c} <small>ºc</small>
              </span>
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
