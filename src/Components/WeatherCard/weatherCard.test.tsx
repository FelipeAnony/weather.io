import WeatherCard from '.';
import { render, screen } from '@testing-library/react';

describe('WeatherCard component', () => {
  it('Should render apropiately with prop day=current', () => {
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
    render(<WeatherCard day="current" dataToShow={dataToShow} />);
    expect(screen.getByText('London')).toBeInTheDocument();
    expect(screen.getByText(/22/)).toBeInTheDocument();
    expect(screen.getByText('Monday, 27/06')).toBeInTheDocument();
    expect(screen.getByAltText('Weather condition')).toBeInTheDocument();
  });

  it('Should render apropiately without prop day', () => {
    const dataToShow = {
      location: 'London',
      icon: '',
      altText: 'Weather condition',
      date: 1656360000,
      temp_c: 22,
      temp_f: 79,
      maxTemp_c: 24,
      minTemp_c: 18,
      maxTemp_f: 0,
      minTempf: 0,
    };
    render(<WeatherCard dataToShow={dataToShow} />);
    expect(screen.getByText('London')).toBeInTheDocument();
    expect(screen.getByText(/24/)).toBeInTheDocument();
    expect(screen.getByText(/18/)).toBeInTheDocument();
    expect(screen.getByText('Monday, 27/06')).toBeInTheDocument();
    expect(screen.getByAltText('Weather condition')).toBeInTheDocument();
  });
});
