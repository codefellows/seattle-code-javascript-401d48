import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import ModeProvider, { ModeContext } from './functionMode';

describe('Mode Context', () => {
  test('provides initial state from context', () => {
    render(
      <ModeProvider>
        <ModeContext.Consumer>
          {
            ({ mode }) => (
              <>
                <h2>ModeProvider Initial State</h2>
                <h3 data-testid="mode-test">{mode} mode from context!</h3>
              </>
            )
          }
        </ModeContext.Consumer>
      </ModeProvider>
    );

    const h3 = screen.getByTestId('mode-test');
    expect(h3).toHaveTextContent('light mode from context!')
  })
})
