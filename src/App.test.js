import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Sign in header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Cudowny Wilk/i);
  expect(linkElement).toBeInTheDocument();
});
