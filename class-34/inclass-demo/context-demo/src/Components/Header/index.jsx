import { useContext, useState } from 'react'
import { SettingsContext } from '../../Context/Settings'
import { Header } from '@mantine/core';
import Login from '../Login';

const AppHeader = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const { title, 
          setTitle, 
          email, 
          setEmail, 
          staff, 
          addStaff
        } = useContext(SettingsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addStaff({name, position});
  }

  return (
    <Header>
      <h1>{title}</h1>
      <h2>email us at {email}</h2>

      <Login />
      <ul>
        {staff.map((person, index) => (
          <li key={`staff-${index}`}>{person.name}, {person.position}</li>
        ))}
      </ul>
      <label>Change Email
          <input onChange={(e) => setEmail(e.target.value)} />
      </label>
      <form onSubmit={handleSubmit}>
          <label> Name
            <input onChange={(e) => setName(e.target.value)} />
          </label>
          <label> Position
            <input onChange={(e) => setPosition(e.target.value)} />
          </label>

      <button type="submit">Add Staff Member</button>
      </form>


    </Header>
  )
}

export default AppHeader;
