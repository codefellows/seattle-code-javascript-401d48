import Candidates from './Components/Candidates'
import './App.css';
import Categories from './Components/Categories';
import Products from './Components/Products';
import Header from './Components/Header';
import ToDoList from './Components/ToDoList';

function App() {
  return (
    <>
      <Header />
      <Candidates />
      <ToDoList />
      <Categories />
      <Products />
    </>
  );
}

export default App;
