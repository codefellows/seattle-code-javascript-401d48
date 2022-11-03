import React from 'react';
import ReactDOM from 'react-dom/client';
import SettingsProvider from './Context/Settings/index.jsx';
import AuthProvider from './Context/Auth/index.jsx';
import { MantineProvider } from '@mantine/core';

import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AuthProvider>
        <SettingsProvider>
          <App />
        </SettingsProvider>
      </AuthProvider>
    </MantineProvider>
  </React.StrictMode >
);
