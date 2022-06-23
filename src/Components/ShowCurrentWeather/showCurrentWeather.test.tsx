import ShowCurrentWeather from '.';

import { render, screen } from '@testing-library/react';

describe('ShowCurrentWeather component', () => {
  const renderEl = () => render(<ShowCurrentWeather weatherData={['']} />);

  it('Should render apropiately', () => {
    renderEl();
    expect(screen.getByText('London')).toBeInTheDocument();
    expect(screen.getByText('22')).toBeInTheDocument();
    expect(screen.getByText('Monday')).toBeInTheDocument();
    expect(screen.getByAltText('Weather condition')).toBeInTheDocument();
  });
});
