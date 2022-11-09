import { useSelector } from 'react-redux'

const Header = () => {
    // relevant to lab-38 (useSelector)
  // employ the useSelector hook from react-redux
  let productsInCart = useSelector(state => state.cart.productsInCart)
  return(
    <>
      <h1>Our Store</h1>
      <a href="#">Cart({productsInCart.length})</a>
    </>
  )
}

export default Header;
