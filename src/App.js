
import './App.css';
import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar';
import ProductDetails from './components/ProductDetails';
import Products from './pages/Products'
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} /> 
        <Route path='/products/:id' element={<ProductDetails />} /> 
      </Routes>
    </div>
  );
}

export default App;
