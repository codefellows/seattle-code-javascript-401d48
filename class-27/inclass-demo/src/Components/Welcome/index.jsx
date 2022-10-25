import { useState } from 'react';

const Welcome = () => {
  
  const [name, setName ] = useState('World');

  const handleChange = (e) => {
    setName(e.target.value);
  }

  return(
    <>
      <h1>Welcome {name}</h1>
      <input data-testid="welcome-input" onChange={handleChange}/>
    </>
  )
}

export default Welcome;
