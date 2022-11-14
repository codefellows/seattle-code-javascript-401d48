import { getCategories } from '../../store/categories.slice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <>
      <h1>Categories</h1>
    </>
  )
};

export default Categories;
