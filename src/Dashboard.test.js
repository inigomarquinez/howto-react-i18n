import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

test('renders `Welcome to this KS!` text', () => {
  render(<Dashboard />);
  const linkElement = screen.getByText(/Welcome to this KS!/i);
  expect(linkElement).toBeInTheDocument();
});
