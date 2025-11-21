import { React, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search';
import Category from './pages/Category';
import Cart from './pages/Cart';
import products from './data/products';
import categories from './data/categories';
import MissionLanding from './pages/MissionLanding';



function App() {


  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<MissionLanding />} />
             <Route path='/' element={<MissionLanding />} />
            {/*<Route index element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails products={products} />} />
            <Route path="/search" element={<Search products={products} />} />
            <Route path="/category/:id" element={<Category categories={categories} products={products} />} />
            <Route path="/cart" element={<Cart products={products} />} />*/}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
