import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Switch from '.';

describe('Switch component', () => {
  let value: 'celsius' | 'fahrenheit' = 'celsius';
  const setValue = jest.fn();

  const renderEl = () => render(<Switch setValue={setValue} value={value} />);

  it('Should render apropiately', () => {
    renderEl();
    expect(screen.getByTitle('celsius')).toBeInTheDocument();
    expect(screen.getByTitle('fahrenheit')).toBeInTheDocument();
  });

  it('Should call setValue function when user click with the correct value', async () => {
    renderEl();
    await userEvent.click(screen.getByTitle('fahrenheit'));
    expect(setValue).toBeCalledWith('fahrenheit');

    await userEvent.click(screen.getByTitle('celsius'));
    expect(setValue).toBeCalledWith('celsius');
  });
});
