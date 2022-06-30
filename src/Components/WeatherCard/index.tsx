import '../../css/weatherCard.css';
import { dateFormatter } from '../../helpers/dateFormatterHelper';

import { WiHumidity } from 'react-icons/wi';
import { BsFillSunFill } from 'react-icons/bs';

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
    uv?: number;
    humidity?: number;
  };
  day?: 'current';
  unit: 'celsius' | 'fahrenheit';
};

function WeatherCard({ dataToShow, day, unit }: Props) {
  return (
    <section className={'weatherCard'}>
      <span className="weatherCard__location">{dataToShow.location}</span>
      <div className="weatherCard__innerContainer">
        <div className={'weatherCard__imageContainer'}>
          <img
            src={dataToShow.icon}
            alt={dataToShow.altText}
            title={dataToShow.altText}
          />
        </div>
        <div
          className={day ? 'weatherCard__temp--current' : 'weatherCard__temp'}
        >
          {day ? (
            <span title="Current temperature" className="weatherCard__ctemp">
              {unit === 'celsius' ? dataToShow.temp_c : dataToShow.temp_f}{' '}
              {unit === 'celsius' ? <small>ºc</small> : <small>ºf</small>}
            </span>
          ) : (
            <>
              <span className="weatherCard__maxtemp">
                {unit === 'celsius'
                  ? dataToShow.maxTemp_c
                  : dataToShow.maxTemp_f}
                {unit === 'celsius' ? <small> º c</small> : <small> º f</small>}
              </span>
              <span className="weatherCard__mintemp">
                {unit === 'celsius'
                  ? dataToShow.minTemp_c
                  : dataToShow.minTempf}
                {unit === 'celsius' ? <small> º c</small> : <small> º f</small>}
              </span>
            </>
          )}
        </div>
      </div>
      {dataToShow.uv && (
        <section className="weatherCard__extraInfo">
          <WiHumidity title="Humidity" />
          <span title="Humidity">{dataToShow.humidity}</span>
          <BsFillSunFill title="Uv ray" />
          <span title="Uv ray">{dataToShow.uv}</span>
        </section>
      )}
      <time className="weatherCard__date">
        {dateFormatter(dataToShow.date)}
      </time>
    </section>
  );
}

export default WeatherCard;
