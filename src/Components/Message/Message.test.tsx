import Message from '.';

import { screen, render } from '@testing-library/react';

describe('Message component', () => {
  const renderEl = () => render(<Message message="Randon Error" />);

  it('Should render apropiately', () => {
    renderEl();
    expect(screen.getByText('Randon Error')).toBeInTheDocument();
  });
});
