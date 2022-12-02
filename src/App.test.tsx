import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders linkedin link', () => {
  render(<App />);
  const linkElement = screen.getByText(/linkedin/i);
  expect(linkElement).toBeInTheDocument();
});
