import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

import apiHelper from './helpers/apiHelper';

jest.mock('./helpers/apiHelper');

describe('App', () => {
  const mockedApiHelper = jest.mocked(apiHelper, true);
  beforeEach(() => {
    const searchCityResponse = [
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

    mockedApiHelper.searchCity.mockReturnValue(
      Promise.resolve(searchCityResponse)
    );

    const weatherDataByIpResponse = {
      current: {
        location: 'London',
        icon: '',
        altText: '',
        date: 1656453419,
        temp_c: 27,
        temp_f: 0,
        maxTemp_c: 20,
        minTemp_c: 12,
        maxTemp_f: 0,
        minTempf: 0,
        uv: 5,
        humidity: 55,
      },
      week: [
        {
          location: 'London',
          icon: '',
          altText: '',
          date: 1656453419,
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
      ],
    };

    mockedApiHelper.getWeatherDataByIp.mockReturnValue(
      Promise.resolve(weatherDataByIpResponse)
    );
  });

  it('Should render apropiately without errors', async () => {
    render(<App />);
    //need to have this itens from search input
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();

    //each card that will be rendered must have the city name an image
    expect((await screen.findAllByText('London')).length).toBe(3);
    expect((await screen.findAllByRole('img')).length).toBe(3);

    //current day card must have the current temp
    expect(await screen.findByText(/27/)).toBeInTheDocument();

    //all the cards except the current day card, must have max_temp, and min_temp values
    expect((await screen.findAllByText('20')).length).toBe(2);
    expect((await screen.findAllByText('12')).length).toBe(2);

    //the date for each card need to be showed correctly
    expect(await screen.findByText('Tuesday, 28/06')).toBeInTheDocument();
    expect(await screen.findByText('Wednesday, 29/06')).toBeInTheDocument();
    expect(await screen.findByText('Thursday, 30/06')).toBeInTheDocument();
  });

  it('Should try to get user ip when loads', () => {
    render(<App />);
    expect(mockedApiHelper.getWeatherDataByIp).toBeCalled();
  });

  it('Should call getWeekForecastWeather from api when city state changes with the correct value', async () => {
    render(<App />);
    await userEvent.type(screen.getByRole('textbox'), 'Bar'); //types in input to show options list
    await userEvent.click(await screen.findByText(/Barcelona/)); //after click in an option of the list, city state must change from default to 'London'
    expect(mockedApiHelper.getWeekForecastWeather).toBeCalledWith('Barcelona'); //then the getWeekForecastWeather must to be called with city state value, 'London'
  });
});
