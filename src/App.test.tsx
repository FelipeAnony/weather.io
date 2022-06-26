import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import apiHelper from './helpers/apiHelper';
import userEvent from '@testing-library/user-event';

jest.mock('./helpers/apiHelper');

describe('App', () => {
  const mockedApiHelper = jest.mocked(apiHelper, true);
  beforeEach(() => {
    const response = [
      {
        id: 0,
        name: 'London',
        region: 'greater london',
        country: '',
        lat: 0,
        lon: 0,
        url: 'a',
      },
      {
        id: 1,
        name: 'Barcelona',
        region: 'catalonya',
        country: '',
        lat: 0,
        lon: 0,
        url: '',
      },
      {
        id: 2,
        name: 'Madrid',
        region: 'madrid',
        country: '',
        lat: 0,
        lon: 0,
        url: '',
      },
    ];
    mockedApiHelper.searchCity.mockReturnValue(Promise.resolve(response));
  });

  it('Should render apropiately without errors', () => {
    render(<App />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Should try to get user ip when loads', () => {
    render(<App />);
    expect(mockedApiHelper.getWeatherDataByIp).toBeCalled();
  });

  it('Should call getWeekForecastWeather from api when city state changes', async () => {
    render(<App />);
    await userEvent.type(screen.getByRole('textbox'), 'Lon');
    await userEvent.click(await screen.findByText(/London/)); //after click, city state must change from default to 'London'
    expect(mockedApiHelper.getWeekForecastWeather).toBeCalledWith('London');
  });
});
