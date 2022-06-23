import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Should render apropiately without errors', () => {
    render(<App />);
  });
});
