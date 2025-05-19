import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from "./pages/Home";

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import { useState } from 'react';
import Cart from './pages/Cart';



function App() {
  const [cartItem,setCartItem]=useState([]);
  return (
    <div className="App">
      <Router>
      <Header cartItem={ cartItem} />
        <Routes>
          <Route path='/'element={<Home/>} />
          <Route path='/search/' element={<Home/>}/>
          <Route path='product/:id' element={<ProductDetails cartItem={ cartItem} setCartItem={setCartItem}/>}/>
          <Route path='/Cart' element={<Cart cartItem={ cartItem} setCartItem={setCartItem}/>}/>
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
