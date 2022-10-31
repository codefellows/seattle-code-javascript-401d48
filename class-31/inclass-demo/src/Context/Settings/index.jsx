import React, { useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({children}) =>{
const [title, settitle] = useState('Some Site');
const [email, setEmail] = useState('someone@somesite.com');

const values = {
  title,
  email,
}

return (
  <SettingsContext.Provider value={values}>
    {children}
  </SettingsContext.Provider>
)
}

export default SettingsProvider;
