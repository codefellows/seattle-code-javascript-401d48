import React, {useContext} from 'react';
import {Switch} from '@blueprintjs/core';
import { SettingsContext } from '../context/site.js';
import { ThemeContext } from '../context/theme.js';

function Content(props) {

  const site = useContext(SettingsContext);
  const theme = useContext(ThemeContext);

  return (
    <div>

      <h2>Here is some amazing content</h2>

      <>
        <h1>{site.title}</h1>
        <div>
          These are some words ...
        </div>
      </>

      <hr />

      <div>
        <h2>Current Mode: {theme.mode}</h2>
        <Switch checked={theme.mode !== 'dark'} label='Change Theme' onChange={theme.toggleMode} />
      </div>

    </div>
  );
}

export default Content;
