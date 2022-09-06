import React from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {

  const state = {
    title: 'My Amazing Website',
    twitter: 'amazingness',
  };

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
