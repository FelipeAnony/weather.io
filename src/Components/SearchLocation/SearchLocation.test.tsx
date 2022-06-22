import SearchLocation from '.';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('SearchLocation component', () => {
  const setWeatherData = jest.fn();
  const renderEl = () =>
    render(<SearchLocation setWeatherData={() => setWeatherData()} />);

  it('Should render apropiately', () => {
    renderEl();
    expect(screen.getByPlaceholderText('Search location')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Should update the input value after user interaction', async () => {
    renderEl();
    await userEvent.type(screen.getByRole('textbox'), 'London');
    expect((screen.getByRole('textbox') as HTMLInputElement).value).toBe(
      'London'
    );
  });

  it('Should call setWeatherData function after user click search button', async () => {
    renderEl();
    await userEvent.click(screen.getByRole('button'));
    expect(setWeatherData).toBeCalledTimes(1);
  });
});
