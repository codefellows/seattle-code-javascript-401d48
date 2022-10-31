import './App.css';
import Main from './Components/Main';
import ClassMain from './Components/ClassMain';
import { useContext } from 'react';
import { SettingsContext } from './Context/Settings';

function App() {
  const { title, email } = useContext(SettingsContext)
  return (
    <>
      <h1>{title}</h1>
      <h2>email us at {email}</h2>
      <Main />
      {/* <ClassMain /> */}
    </>
  );
}

export default App;
