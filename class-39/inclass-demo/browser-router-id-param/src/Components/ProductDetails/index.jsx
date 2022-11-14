import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const ProductDetails = () => {
  let products = useSelector(state => state.products);
  let { id } = useParams();

  let theProduct = products.find(product => product._id === id)

  return (
    <>
      <h1>{theProduct.name}</h1>
      <h3>${theProduct.price}</h3>
    </>
  )
};

export default ProductDetails;
