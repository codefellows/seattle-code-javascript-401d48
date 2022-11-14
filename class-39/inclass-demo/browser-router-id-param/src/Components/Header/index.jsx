import { useSelector } from 'react-redux'
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Header = () => {
    // relevant to lab-38 (useSelector)
  // employ the useSelector hook from react-redux
  let productsInCart = useSelector(state => state.cart.productsInCart)
  return(
    <>
      <Button component={Link} to="/">
        <Typography variant="h4">Our Store</Typography>
      </Button>
      <a href="#">Cart({productsInCart.length})</a>
    </>
  )
}

export default Header;
