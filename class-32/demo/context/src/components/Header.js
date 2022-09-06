import React, {useContext} from 'react';

import {SettingsContext} from '../context/site';

import {Navbar,Alignment} from '@blueprintjs/core';

function Header(props) {

  // Must be called contextType
  const context = useContext(SettingsContext);

  // then, you can use this.context ...
  return (
    <header>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>{context.title}</Navbar.Heading>
        </Navbar.Group>
      </Navbar>
    </header>
  );
}

export default Header;
