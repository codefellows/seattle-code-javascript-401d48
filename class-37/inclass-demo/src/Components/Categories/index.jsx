import { connect } from 'react-redux';
import { selectCategory } from '../../store/actions';

const Categories = (props) => {


  return (
    <>
    <h3>Categories</h3>
      <ul>
        {props.categories.map((category, index) => (
          <li 
            key={`category-${index}`}
            onClick={() => props.selectCategory(category.name)}
          >
            {category.displayName}
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
