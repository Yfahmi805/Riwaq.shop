import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Cart from '../components/cart/cart';
import Products from '../data/products';
import Categories from '../data/categories';
import { MdAddShoppingCart } from 'react-icons/md';
import { BiFilter, BiSearch } from 'react-icons/bi';
import { BsFilter } from "react-icons/bs";
import { Link, useSearchParams } from 'react-router-dom';
import './Search.css';

function Search({ showCart, cart, addToCart, removeFromCart, updateQuantity, hideCart }) {
    const [searchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 200 });
    const [filteredProducts, setFilteredProducts] = useState(Products);

    useEffect(() => {
        const categoryFromUrl = searchParams.get('category');
        if (categoryFromUrl) {
            setSelectedCategory(categoryFromUrl);
        }
    }, [searchParams]);

    useEffect(() => {
        const filtered = Products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.artist.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'all' || product.categoryId === parseInt(selectedCategory);
            const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;

            return matchesSearch && matchesCategory && matchesPrice;
        });
        setFilteredProducts(filtered);
    }, [searchQuery, selectedCategory, priceRange]);

    const showFiltere = () => {
        const Filtere = document.querySelector('.filters');
        if (Filtere) {
            Filtere.style.display = 'block';

        }
    };

    const hideFiltere = () => {
        const Filtere = document.querySelector('.filters');
        if (Filtere) {
            Filtere.style.display = 'none';
        }
    };
    return (
        <div className="search-page">
            <Header showCart={showCart} cart={cart} />
            <Cart
                cart={cart}
                hideCart={hideCart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
            />
            <section className="search-container">
                <h1>Search Products</h1>
                <div className="search-header">
                    <div className="search-bar">
                        <BiSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search for products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <button onClick={showFiltere} className='openFilter'>
                        <BiFilter style={{ padding: "0 5px", fontSize: "18px" }} />
                        filter
                    </button>

                </div>
                <aside className="filters">
                    <div className="filter-section">
                        <h3>Categories</h3>
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="all">All Categories</option>
                            {Categories.map(category => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-section">
                        <h3>Price Range</h3>
                        <div className="price-inputs">
                            <input
                                type="number"
                                value={priceRange.min}
                                onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                                placeholder="Min"
                            />
                            <span>-</span>
                            <input
                                type="number"
                                value={priceRange.max}
                                onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                                placeholder="Max"
                            />
                        </div>
                    </div>
                    <button className="close-filters" onClick={hideFiltere}>Close</button>
                </aside>
                <div className="search-content">
                    <section className="search-results">
                        <div className="results-count">
                            <p>{filteredProducts.length} products found</p>
                        </div>
                        <div className="product-list">
                            {filteredProducts.map((product) => (
                                <div className="product-item product-card" key={product.id}>
                                    <Link to={`/product/${product.id}`} className="product-link">
                                        <img src={product.image} alt={product.name} />
                                        <h3 className="productName ">{product.name}</h3>
                                        <p className="artist">{product.artist}</p>
                                    </Link>
                                    <div className="cardBottom">
                                        <p className="price">{product.price.toFixed(2)} MAD</p>
                                        <button className="AddToCart" onClick={() => addToCart(product)}>
                                            <MdAddShoppingCart />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Search;