import React from 'react';
import { SettingsContext } from '../context/site.js';
import { ThemeContext } from '../context/theme.js';

class Content extends React.Component {

  // when you want to use multiple contexts in a class component, you can't use
  // the static contextType identifier ...
  // static contextType = SettingsContext;

  // Rather, you must run a method within the .Consumer to retrieve context and use it
  // (Note: This is why we have a useContext() hook in function components)

  render() {
    return (
      <div>

        <h2>Here is some amazing content</h2>
        <strong>Rendered via Class Component</strong>

        <SettingsContext.Consumer>
          {siteContext => (
            <>
              <h1>{siteContext.title}</h1>
              <div>
                <a href={`http://www.twitter.com/${siteContext.twitter}`}>
                  @{siteContext.twitter}
                </a>
              </div>
            </>
          )}
        </SettingsContext.Consumer>

        <hr />

        <ThemeContext.Consumer>
          {themeContext => (
            <h2>Current Mode: {themeContext.mode}</h2>
          )}
        </ThemeContext.Consumer>

      </div>
    );
  }
}

export default Content;
