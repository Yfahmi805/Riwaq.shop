import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';
import './Search.css';

function Search({ products }) {
  const [query, setQuery] = useState('');
  // products prop is passed from App.jsx
  const results = (typeof products !== 'undefined' && Array.isArray(products))
    ? products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div className="search-page">
      <Header />
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search products..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <div className="search-results">
          {results.map(item => (
            <Link to={`/product/${item.id}`} className="search-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <p className="search-name">{item.name}</p>
                <p className="search-price">${item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Search;
