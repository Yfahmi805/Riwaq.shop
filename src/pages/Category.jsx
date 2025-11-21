import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './Category.css';
import categories from '../data/categories.js';
import { useParams, Link } from 'react-router-dom';

function Category({ categories, products }) {
  const { id } = useParams();
  const categoryId = parseInt(id);
  const category = categories.find(c => c.id === categoryId);
  const filteredProducts = (typeof products !== 'undefined' && Array.isArray(products))
    ? products.filter(p => p.categoryId === categoryId)
    : [];

  return (
    <div className="category-page">
      <Header />
      <div className="category-container">
        <h2>{category ? category.name : 'Shop by Category'}</h2>
        <div className="category-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <Link to={`/product/${product.id}`} className="category-card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
              </Link>
            ))
          ) : (
            <p>No products found for this category.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Category;
