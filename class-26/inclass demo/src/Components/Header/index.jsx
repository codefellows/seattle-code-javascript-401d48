import React from 'react';
import './style.css';

class Header extends React.Component {

  render() {
    return (
      <>
        <header>
          <h1 data-testid="header-h1">Hello {this.props.greeting}</h1>
        </header>
      </>
    )
  }
}

export default Header;
