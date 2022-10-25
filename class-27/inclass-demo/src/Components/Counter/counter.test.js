import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Counter from'./';

describe('Counter Component', () => {
  it('can count', () => {
    render(<Counter />);

    // gets elements from the "rendered" component
    const button = screen.getByText('Update Clicks');
    const counter = screen.getByTestId('counter');
    const factor = screen.getByTestId('factor');

    // mimic event
    fireEvent.click(button);

    expect(counter).toHaveTextContent(1);
    expect(factor).toHaveTextContent('false');
  });
  it('can count and accommodate factor of five', () => {
    render(<Counter />);

    const button = screen.getByText('Update Clicks');
    const counter = screen.getByTestId('counter');
    const factor = screen.getByTestId('factor');

    expect(counter).toHaveTextContent(0);
    expect(factor).toHaveTextContent('false');

    for(let i = 1; i < 42; i++){
      fireEvent.click(button);
      expect(counter).toHaveTextContent(`Button has been clicked ${i} time(s)`);
      let expected = i % 5 ? 'false' : 'true';
      expect(factor).toHaveTextContent(expected);
    }
  })
})
