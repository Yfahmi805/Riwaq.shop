import { React, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import ProductDetails from './pages/ProductDetails';

function App() {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const showCart = () => {
    const Cart = document.querySelector('.cart');
    if (Cart) {
      Cart.style.display = 'block';
    }
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart[index] = {
        ...newCart[index],
        quantity: newQuantity,
      };
      return newCart;
    });
  };

  const hideCart = () => {
    const Cart = document.querySelector('.cart');
    if (Cart) {
      Cart.style.display = 'none';
    }
  };

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  cart={cart}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                  showCart={showCart}
                  hideCart={hideCart}
                />
              }
            />
            <Route
              path="/search"
              element={
                <Search
                  cart={cart}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                  showCart={showCart}
                  hideCart={hideCart}
                />
              }
            />
            <Route
              path="/product/:id"
              element={
                <ProductDetails
                  cart={cart}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                  showCart={showCart}
                  hideCart={hideCart}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
