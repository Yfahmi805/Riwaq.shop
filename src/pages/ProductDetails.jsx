import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './ProductDetails.css';
import { useParams } from 'react-router-dom';

function ProductDetails({ products }) {
  const { id } = useParams();
  const productId = parseInt(id);
  // products prop is passed from App.jsx
  // fallback to empty object if not found
  const product = (typeof products !== 'undefined' && Array.isArray(products))
    ? products.find(p => p.id === productId)
    : null;

  if (!product) {
    return (
      <div className="product-details-page">
        <Header />
        <div className="product-details-container">
          <p>Product not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="product-details-page">
      <Header />
      <div className="product-details-container">
        <img src={product.image} alt={product.name} className="product-details-img" />
        <div className="product-details-info">
          <h1>{product.name}</h1>
          <p className="product-details-price">${product.price}</p>
          <p className="product-details-desc">{product.description}</p>
          <button className="product-details-btn">Add to Cart</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
