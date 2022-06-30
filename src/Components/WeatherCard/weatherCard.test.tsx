import WeatherCard from '.';
import { cleanup, render, screen } from '@testing-library/react';

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
      uv: 5,
      humidity: 55,
    };
    render(
      <WeatherCard unit="celsius" day="current" dataToShow={dataToShow} />
    );
    expect(screen.getByText('London')).toBeInTheDocument();
    expect(screen.getByText(/22/)).toBeInTheDocument();
    expect(screen.getByAltText('Weather condition')).toBeInTheDocument();
    expect(screen.getAllByTitle('Humidity').length).toBe(2);
    expect(screen.getAllByTitle('Uv ray').length).toBe(2);
    expect(screen.getByText('Monday, 27/06')).toBeInTheDocument();
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
    render(<WeatherCard unit="celsius" dataToShow={dataToShow} />);
    expect(screen.getByText('London')).toBeInTheDocument();
    expect(screen.getByText(/24/)).toBeInTheDocument();
    expect(screen.getByText(/18/)).toBeInTheDocument();
    expect(screen.getByText('Monday, 27/06')).toBeInTheDocument();
    expect(screen.getByAltText('Weather condition')).toBeInTheDocument();
  });

  it('Should change apropiately the measurement unit when prop unit changes', () => {
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
      uv: 5,
      humidity: 55,
    };

    //WeatherCard with prop day=current and celsius unit:
    render(
      <WeatherCard unit="celsius" day="current" dataToShow={dataToShow} />
    );
    expect(screen.getByText(/ºc/i)).toBeInTheDocument();

    cleanup();

    //WeatherCard with prop day=current and fahrenheit unit:
    render(
      <WeatherCard unit="fahrenheit" day="current" dataToShow={dataToShow} />
    );
    expect(screen.getByText(/ºf/i)).toBeInTheDocument();

    cleanup();

    //WeatherCard without prop day and celsius unit:
    render(<WeatherCard unit="celsius" dataToShow={dataToShow} />);
    expect(screen.getAllByText(/º c/i).length).toBe(2);
    cleanup();

    //WeatherCard without prop day and fahrenheit unit:
    render(<WeatherCard unit="fahrenheit" dataToShow={dataToShow} />);
    expect(screen.getAllByText(/º f/i).length).toBe(2);
  });
});
