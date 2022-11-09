import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { selectCategory } from '../../store/actions';
import { getCategories } from '../../store/categories';

const Categories = (props) => {
  // relevant to lab-38
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
    <h3>Categories</h3>
      <ul>
        {props.categories.map((category, index) => (
          <li 
            key={`category-${index}`}
            onClick={() => props.selectCategory(category.name)}
          >
            {category.name}
          </li>
        ))}
      </ul>

    </>
  )
};

const mapStateToProps = (store) => {
  return {
    categories: store.categories.categories,
  }
}

const mapDispatchToProps = {
  selectCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
