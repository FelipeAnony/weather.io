import CardsCarousel from '.';

import { render, screen } from '@testing-library/react';

describe('CardsCarousel component', () => {
  const fakeWeatherData = {
    current: {
      location: '',
      icon: '',
      altText: '',
      date: 0,
      temp_c: 0,
      temp_f: 0,
      maxTemp_c: 20,
      minTemp_c: 12,
      maxTemp_f: 0,
      minTempf: 0,
    },
    week: [
      {
        location: 'London',
        icon: '',
        altText: '',
        date: 0,
        temp_c: 0,
        temp_f: 0,
        maxTemp_c: 20,
        minTemp_c: 12,
        maxTemp_f: 0,
        minTempf: 0,
      },
      {
        location: 'London',
        icon: '',
        altText: '',
        date: 1656533419,
        temp_c: 0,
        temp_f: 0,
        maxTemp_c: 20,
        minTemp_c: 12,
        maxTemp_f: 0,
        minTempf: 0,
      },
      {
        location: 'London',
        icon: '',
        altText: '',
        date: 1656619819,
        temp_c: 0,
        temp_f: 0,
        maxTemp_c: 20,
        minTemp_c: 12,
        maxTemp_f: 0,
        minTempf: 0,
      },
      {
        location: 'London',
        icon: '',
        altText: '',
        date: 1656699819,
        temp_c: 20,
        temp_f: 0,
        maxTemp_c: 20,
        minTemp_c: 12,
        maxTemp_f: 0,
        minTempf: 0,
      },
      {
        location: 'London',
        icon: '',
        altText: '',
        date: 1656787491,
        temp_c: 0,
        temp_f: 0,
        maxTemp_c: 20,
        minTemp_c: 12,
        maxTemp_f: 0,
        minTempf: 0,
      },
      {
        location: 'London',
        icon: '',
        altText: '',
        date: 1656879019,
        temp_c: 0,
        temp_f: 0,
        maxTemp_c: 20,
        minTemp_c: 12,
        maxTemp_f: 0,
        minTempf: 0,
      },
      {
        location: 'London',
        icon: '',
        altText: '',
        date: 1656965419,
        temp_c: 0,
        temp_f: 0,
        maxTemp_c: 20,
        minTemp_c: 12,
        maxTemp_f: 0,
        minTempf: 0,
      },
    ],
  };

  const renderEl = () =>
    render(<CardsCarousel weatherData={fakeWeatherData} />);

  it('Should render apropiately', () => {
    renderEl();

    //each card that will be rendered had the city name, max and min temp and an image
    expect(screen.getAllByText('London').length).toBe(6);
    expect(screen.getAllByText('20').length).toBe(6);
    expect(screen.getAllByText('12').length).toBe(6);
    expect(screen.getAllByRole('img').length).toBe(6);

    //the date for each card need to be showed correctly
    expect(screen.getByText('Wednesday, 29/06')).toBeInTheDocument();
    expect(screen.getByText('Thursday, 30/06')).toBeInTheDocument();
    expect(screen.getByText('Friday, 01/07')).toBeInTheDocument();
    expect(screen.getByText('Saturday, 02/07')).toBeInTheDocument();
    expect(screen.getByText('Sunday, 03/07')).toBeInTheDocument();
    expect(screen.getByText('Monday, 04/07')).toBeInTheDocument();
  });
});
