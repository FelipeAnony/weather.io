import WeatherCard from '.';
import { render, screen } from '@testing-library/react';

describe('WeatherCard component', () => {
  const dataToShow = {
    location: 'London',
    icon: '',
    altText: 'Weather condition',
    date: 1656360000,
    temp_c: 22,
    temp_f: 79,
    maxTemp_c: 0,
    minTemp_c: 0,
    maxTemp_f: 0,
    minTempf: 0,
  };

  const renderEl = () =>
    render(<WeatherCard size="big" dataToShow={dataToShow} />);

  it('Should render apropiately', () => {
    renderEl();
    expect(screen.getByText('London')).toBeInTheDocument();
    expect(screen.getByText(/22/)).toBeInTheDocument();
    expect(screen.getByText('Monday, 27/06')).toBeInTheDocument();
    expect(screen.getByAltText('Weather condition')).toBeInTheDocument();
  });
});
