import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/Auth';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {
    isLoggedIn,
    user,
    error,
    can,
    login,
    logout,
  } = useContext(AuthContext);

  return (
    <>
      <label>Username:
        <input onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>Password:
        <input onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={() => login(username, password)}>Login</button>

      <div>user: {JSON.stringify(user)}</div>
    </>
  )
}

export default Login;
