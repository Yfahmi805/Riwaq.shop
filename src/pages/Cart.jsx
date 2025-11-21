import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import './Cart.css';

function Cart() {
  // Example static cart items
  const cartItems = [
    { id: 1, name: 'Moroccan Bag', image: '', price: 120, qty: 1 },
    { id: 2, name: 'Artisan Scarf', image: '', price: 60, qty: 2 }
  ];

  return (
    <div className="cart-page">
      <Header />
      <div className="cart-container">
        <h2>Your Cart</h2>
        <div className="cart-grid">
          {cartItems.map(item => (
            <div className="cart-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <p className="cart-name">{item.name}</p>
                <p className="cart-price">${item.price} x {item.qty}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="cart-checkout-btn">Proceed to Checkout</button>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
