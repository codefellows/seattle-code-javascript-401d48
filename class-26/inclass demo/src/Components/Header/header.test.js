import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Header from'./index.jsx';

describe('The Header Component', () => {
  it('renders h1 with props as expected', () => {
    render(<Header greeting="Test"/>);

    let h1 = screen.getByTestId('header-h1');
    expect(h1).toHaveTextContent('Hello Test');

    let anotherH1Example = screen.getByText('Hello Test');
    expect(anotherH1Example).toBeTruthy();
    expect(anotherH1Example).toBeInTheDocument();
  });
});
