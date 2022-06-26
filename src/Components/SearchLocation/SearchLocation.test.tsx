import SearchLocation from '.';

import apiHelper from '../../helpers/apiHelper';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.mock('../../helpers/apiHelper');

const mockedApi = jest.mocked(apiHelper, true);

describe('SearchLocation component', () => {
  const setCity = jest.fn((value) => value);
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

    mockedApi.searchCity.mockReturnValue(Promise.resolve(response));
  });

  const renderEl = () => render(<SearchLocation setCity={setCity} />);

  it('Should render apropiately', () => {
    renderEl();
    expect(screen.getByPlaceholderText('Search location')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Should show list of search results after user type at lest 3 letters', async () => {
    renderEl();
    await userEvent.type(screen.getByRole('textbox'), 'Lon');
    expect((screen.getByRole('textbox') as HTMLInputElement).value).toBe('Lon');
    expect(await screen.findByText(/London/)).toBeInTheDocument();
    expect(await screen.findByText(/Barcelona/)).toBeInTheDocument();
    expect(await screen.findByText(/Madrid/)).toBeInTheDocument();
  });

  it('Should show a list of search results after user type at lest 3 letters and click search Button', async () => {
    renderEl();
    await userEvent.type(screen.getByRole('textbox'), 'Lon');
    await userEvent.click(screen.getByRole('button'));
    expect(await screen.findByText(/London/)).toBeInTheDocument();
    expect(await screen.findByText(/Barcelona/)).toBeInTheDocument();
    expect(await screen.findByText(/Madrid/)).toBeInTheDocument();
  });

  it('Should call setCity function after user click in an option of search list with the correct value', async () => {
    renderEl();
    await userEvent.type(screen.getByRole('textbox'), 'Lon');
    await userEvent.click(await screen.findByText(/London/));
    expect(setCity).toBeCalledWith('London');
  });
});
