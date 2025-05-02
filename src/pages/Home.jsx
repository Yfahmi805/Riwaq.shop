import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Categories from '../data/categories'
import Products from '../data/products'
import { BiShoppingBag } from "react-icons/bi";
import './Home.css';
import { MdAddShoppingCart } from 'react-icons/md';
import Cart from '../components/cart/cart';
import ProductsComponent from '../components/products/products';
import { Link } from 'react-router-dom';

function Home({ showCart, cart, addToCart, removeFromCart, updateQuantity, hideCart }) {
    return (
        <div>
            <Header showCart={showCart} cart={cart} />
            <Cart
                cart={cart}
                hideCart={hideCart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
            />
            <main>
                <div className="content">
                    <h1>We give new life to pre-used clothes</h1>
                    <p>Discover unique, eco-friendly fashion pieces curated by creative designers.</p>
                    <button className="callToAction">Discover Now</button>
                </div>
            </main>
            <section className="categories" id="categories">
                <h2>Categories</h2>
                <div className="category-list">
                    {Categories.map((category) => (
                        <Link
                            to={`/search?category=${category.id}`}
                            className="category-item"
                            key={category.id}
                        >
                            <img src={category.imageUrl} alt={category.name} />
                            <h3>{category.name}</h3>
                        </Link>
                    ))}
                </div>
            </section>
            <section className="trending" id="trending">
                <h2>Trending</h2>
                <ProductsComponent products={Products.sort((a, b) => b.trendingRate - a.trendingRate).slice(0, 6)} addToCart={addToCart} />
            </section>

            <section className="mission" id="mission">
                <div className="mission-content">
                    <h2>Our Mission</h2>
                    <p>
                        We love to create a unique online fashion marketplace that connects local artisans and fashion enthusiasts, empowering sustainable shopping and celebrating authentic style from Morocco and beyond.
                    </p>
                </div>
            </section>
            <section className="foryou" id="foryou">
                <h2>For You</h2>
                <ProductsComponent products={Products} addToCart={addToCart} />
                <div className="loadmore">
                    <button>Load more..</button>
                </div>
            </section>
            <section className="how-it-works">
                <h2>How It Works</h2>
                <div className="steps">
                    <div className="step">
                        <img src="https://img.icons8.com/ios-filled/100/shopping-bag.png" />
                        <h3>Browse</h3>
                        <p>Discover clothes from trusted sellers and local cooperatives.</p>
                    </div>
                    <div className="step">
                        <img src="https://img.icons8.com/ios-filled/100/shopping-cart.png" />
                        <h3>Order</h3>
                        <p>Buy your favorite pieces with secure checkout.</p>
                    </div>
                    <div className="step">
                        <img src="https://img.icons8.com/ios-filled/100/delivery.png" />
                        <h3>Receive</h3>
                        <p>Enjoy fast, eco-friendly delivery to your door.</p>
                    </div>
                </div>
            </section>
            <section className="panel" id="panel">
                <div className="panel-content">
                    <h2>Join the Riwaq Community</h2>
                    <p>Be part of a sustainable fashion movement. Share your style, connect with others, and make a difference.</p>
                    <button className="join-button">Join Now</button>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Home;