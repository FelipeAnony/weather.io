import Loading from '.';

import { screen, render } from '@testing-library/react';

describe('Loading component', () => {
  const renderEl = () => render(<Loading message="Message to be displayed" />);

  it('Should render apropiately without prop error', () => {
    renderEl();

    expect(screen.getByText('Weather.io')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('Message to be displayed')).toBeInTheDocument();
  });

  it('Should render apropiately with prop error', () => {
    render(<Loading message="" error="Error Message" />);

    expect(screen.getByText('Error Message')).toBeInTheDocument();
  });
});
