import CardsCarousel from '.';

import { render, screen } from '@testing-library/react';

describe('CardsCarousel component', () => {
  const renderEl = () => render(<CardsCarousel weatherData={['']} />);

  it('Should render apropiately', () => {
    renderEl();
  });
});
