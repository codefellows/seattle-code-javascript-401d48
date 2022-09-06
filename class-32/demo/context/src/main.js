import React from 'react';

import Content from './components/Content.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

import { ThemeContext } from './context/theme.js';

import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import './app.scss';

const styles = {
  dark: {
    background: '#5C7080',
  },
  light: {
    background: '#f5f5f5',
  },
};

class Main extends React.Component {

  static contextType = ThemeContext;

  render() {
    return (
      <main style={styles[this.context.mode]} className={`bp3-${this.context.mode}`}>
        <Header />
        <section>
          <Content />
        </section>
        <Footer />
      </main>
    );
  }
}

export default Main;
