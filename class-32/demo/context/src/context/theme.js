import React, {useState} from 'react';

export const ThemeContext = React.createContext();

function Theme(props) {

  const [mode, setMode] = useState('dark');

  const toggleMode = () => setMode(mode === 'dark' ? 'light' : 'dark' );

  const exportedValues = {
    mode,
    toggleMode,
  };

  return (
    <ThemeContext.Provider value={exportedValues}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default Theme;
