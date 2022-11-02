import { useContext } from 'react';
import { When } from 'react-if';
import { AuthContext } from '../../Context/Auth';

const Auth = ({capability, children}) => {
  const {isLoggedIn, can} = useContext(AuthContext);

  return (
    <When condition={isLoggedIn && can(capability)}>
      { children }
    </When>
  )
}

export default Auth;
