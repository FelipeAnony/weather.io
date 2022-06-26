import ShowCurrentWeather from '.';

import { render, screen } from '@testing-library/react';

describe('ShowCurrentWeather component', () => {
  const fakeData = {
    location: {
      name: 'London',
      region: '',
      country: '',
      lat: 0,
      lon: 0,
      tz_id: 0,
      localtime_epoch: 0,
      localtime: '',
    },
    current: {
      last_updated_epoch: 0,
      last_updated: '',
      temp_c: 22,
      temp_f: 0,
      is_day: 0,
      condition: {
        text: '',
        icon: '',
        code: 0,
      },
      humidity: 0,
      cloud: 0,
      feelslike_c: 0,
      feelslike_f: 0,
    },
    forecast: {
      forecastday: [
        {
          date: '',
          date_epoch: 0,
          day: {
            maxtemp_c: 0,
            maxtemp_f: 0,
            mintemp_c: 0,
            mintemp_f: 0,
            avgtemp_c: 0,
            avgtemp_f: 0,
            daily_will_it_rain: 0,
            daily_chance_of_rain: 0,
            daily_will_it_snow: 0,
            daily_chance_of_snow: 0,
            condition: {
              text: '',
              icon: '',
              code: 0,
            },
          },
        },
      ],
    },
  };

  const renderEl = () => render(<ShowCurrentWeather weatherData={fakeData} />);

  it('Should render apropiately', () => {
    renderEl();
    expect(screen.getByText('London')).toBeInTheDocument();
    expect(screen.getByText('22')).toBeInTheDocument();
    // expect(screen.getByText('Monday')).toBeInTheDocument();
    // expect(screen.getByAltText('Weather condition')).toBeInTheDocument();
  });
});
