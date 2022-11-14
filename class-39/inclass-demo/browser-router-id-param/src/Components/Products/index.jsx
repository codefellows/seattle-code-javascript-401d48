import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getProducts } from '../../store/products';

const Products = (props) => {
  let products = useSelector(state => state.products);
  let dispatch = useDispatch();

  useEffect(() => {
    // I could pass active category as a an arg
    dispatch(getProducts())
  }, []);

  return (
    <>
      <h3>Products</h3>
      <ul>
        {products.map((product, index) => (
          <li key={`product-${index}`}>
            {product.name}
            <Button component={Link} to={`/products/${product._id}`}>View Details</Button>
          </li>

        ))}
      </ul>
    </>
  )
}

export default Products;
