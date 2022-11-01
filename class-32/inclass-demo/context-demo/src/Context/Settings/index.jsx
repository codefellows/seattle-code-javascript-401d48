import React, { useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({children}) =>{
const [title, setTitle] = useState('Some Site');
const [email, setEmail] = useState('someone@somesite.com');
const [staff, setStaff] = useState([{name: 'Ryan', position: 'Instructor'}]);

const addStaff = (person) => {
  console.log('person', person)
  if(person && person.name && person.position){
    setStaff([...staff, person]);
  } else {
    console.log('Invalid Person!  add title and name')
  }
}

const values = {
  title,
  email,
  staff,
  setTitle,
  setEmail,
  addStaff,
}

return (
  <SettingsContext.Provider value={values}>
    {children}
  </SettingsContext.Provider>
)
}

export default SettingsProvider;
