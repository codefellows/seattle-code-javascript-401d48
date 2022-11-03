import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import SettingsProvider, { SettingsContext } from '.';

describe('Settings Context Unit', () => {
  it('initial state works as expected', () => {
    render(
      <SettingsProvider>
        <SettingsContext.Consumer>
          {
            ({ showCompleted, pageItems, sort }) => (
              <ul>
                <li data-testid="show-completed">{showCompleted.toString()}</li>
                <li data-testid="page-items">{pageItems}</li>
                <li data-testid="sort">{sort}</li>
              </ul>
            )
          }
        </SettingsContext.Consumer>
      </SettingsProvider>
    );

    let completedLi = screen.getByTestId('show-completed');
    let pageItemLi = screen.getByTestId('page-items');
    let sortLi = screen.getByTestId('sort');

    expect(completedLi).toHaveTextContent('false');
    expect(pageItemLi).toHaveTextContent('3');
    expect(sortLi).toHaveTextContent('difficulty');
  });
  it('changed state works as expected', () => {
    render(
      <SettingsProvider>
        <SettingsContext.Consumer>
          {
            ({ showCompleted, pageItems, sort, setShowCompleted, setPageItems, setSort }) => (
              <ul>
                <li data-testid="show-completed">{showCompleted.toString()}</li>
                <li data-testid="page-items">{pageItems}</li>
                <li data-testid="sort">{sort}</li>
                <button onClick={() => setShowCompleted(true)}>ONE</button>
                <button onClick={() => setPageItems(5)}>TWO</button>
                <button onClick={() => setSort('different')}>THREE</button>

              </ul>
            )
          }
        </SettingsContext.Consumer>
      </SettingsProvider>
    );

    let completedLi = screen.getByTestId('show-completed');
    let pageItemLi = screen.getByTestId('page-items');
    let sortLi = screen.getByTestId('sort');

    expect(completedLi).toHaveTextContent('false');
    expect(pageItemLi).toHaveTextContent('3');
    expect(sortLi).toHaveTextContent('difficulty');

    let buttonOne = screen.getByText('ONE');
    let buttonTwo = screen.getByText('TWO');
    let buttonThree = screen.getByText('THREE');
    fireEvent.click(buttonOne);
    fireEvent.click(buttonTwo);
    fireEvent.click(buttonThree);

    expect(completedLi).toHaveTextContent('true');
    expect(pageItemLi).toHaveTextContent('5');
    expect(sortLi).toHaveTextContent('different');


  })
})
