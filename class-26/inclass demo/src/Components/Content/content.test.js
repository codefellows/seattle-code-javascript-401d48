import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Content from './';

describe('The Content component', () => {
  it('renders a button that changes the document title', () => {
    const changeTitle = jest.fn();
    render(<Content changeTitle={changeTitle}/>);

    let button = screen.getByTestId('content-button');
    fireEvent.click(button);
    expect(changeTitle).toHaveBeenCalled();
    
    let h3 = screen.getByText('You can make changes to the document!');
    // console.log(h3);
    // missing fire event

    expect(button).toHaveTextContent('Change Title');
    expect(h3).toBeInTheDocument();
  });
});
