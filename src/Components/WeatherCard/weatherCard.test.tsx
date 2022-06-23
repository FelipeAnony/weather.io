import WeatherCard from '.';
import { render, screen } from '@testing-library/react';

describe('WeatherCard component', () => {
  const dataToShow = {
    city: 'London',
    weekDay: 'Monday',
    temperature: '22',
  };

  const renderEl = () => render(<WeatherCard dataToShow={dataToShow} />);

  it('Should render apropiately', () => {
    renderEl();
    expect(screen.getByText('London')).toBeInTheDocument();
    expect(screen.getByText('22')).toBeInTheDocument();
    expect(screen.getByText('Monday')).toBeInTheDocument();
    expect(screen.getByAltText('Weather condition')).toBeInTheDocument();
  });
});
