import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import ModeProvider from './Context/Mode/';
import SettingsProvider from './Context/Settings';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <SettingsProvider>
        <ModeProvider>
          <App />
        </ModeProvider>
      </SettingsProvider>
    </MantineProvider>
  </React.StrictMode>
);
