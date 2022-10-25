import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Welcome from './index';

describe('Welcome Component', () => {
  it('loads and displays initial data as expected', () => {
    render(<Welcome />);

    const h1 = screen.getByText('Welcome World');
    expect(h1).toBeInTheDocument();
  });

  it('can Change name', () => {
    render(<Welcome />);

    const input = screen.getByTestId('welcome-input');
    fireEvent.change(input, {target: {value: 'Ryan'}});
    const h1 = screen.getByText('Welcome Ryan');

    expect(h1).toBeInTheDocument();
  })
});
