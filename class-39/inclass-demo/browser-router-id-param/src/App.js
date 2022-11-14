import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Storefront from './Storefront';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route default path="/" element={<Storefront />}/>
          <Route path="/products/:id" element={<ProductDetails />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
