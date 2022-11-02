import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Header';
import SettingsForm from './Components/SettingsForm';

import ToDo from './Components/ToDo';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ToDo />} />
          <Route path="/settings" element={<SettingsForm />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
