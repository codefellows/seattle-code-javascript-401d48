import React, { useEffect, useState } from 'react';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const can = (capability) => {
    // note shorthand
    return user?.capabilities?.includes(capability);
  }

  const login = async (username, password) => {
    let config = {
      baseURL: 'https://api-js401.herokuapp.com',
      url: '/signin',
      method: 'post',
      auth: {
        username,
        password,
      }
    }

    let response = await axios(config);
    // console.log('login information:  ', response.data);
    let { token } = response.data

    if(token){
      try {
        // validate the token
        _validateToken(token);
      } catch (e){
        // maybe set error in state
        console.error(e);
      }
    }
  }

  function _validateToken(token){
    try{
      let validUser = jwt_decode(token);
      console.log('validUser: ', validUser);
      if(validUser){
        setUser(validUser);
        setIsLoggedIn(true);
        console.log('I am logged In')
        cookie.save('auth', token);
      }
    } catch (e){
      setIsLoggedIn(false);
      setError(e);
      console.error(e);
    }
  }

  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
    setError(null); // maybe important?  not sure
    cookie.remove('auth');

  }

  // automatically login user if 'auth' cookie exists
  useEffect(() => {
    let token = cookie.load('auth');
    if(token) {
      _validateToken(token)
    }
  }, []);

  // values to "provide"
  let values  = {
    isLoggedIn,
    user,
    error,
    can,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={values}>
      { children }
    </AuthContext.Provider>
  )

}

export default AuthProvider;
