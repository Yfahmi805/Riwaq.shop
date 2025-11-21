import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeroImg from '../assets/images/back.jpeg';
import './Home.css';
import { RiArrowRightLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import products from '../data/products.js';
import categories from '../data/categories.js';
function Home() {
  return (
    <div className="home">
      <Header />

      <section className="hero-parfs">
        <div className="hero-content">
          <h1>Authentic Style,<br />Crafted with Heart</h1>
          <p>Discover Morocco’s finest artisans and elevate your wardrobe with timeless, sustainable pieces.</p>
          <Link className="hero-btn" to="/category/1">Explore Collections <RiArrowRightLine /></Link>
        </div>
      </section>

      <section className="categories-parfs">
        <h2>Explore by Category</h2>
        <div className="categories-grid">
          {categories.map(cat => (
            <Link to={`/category/${cat.id}`} className="category-parfs-card" key={cat.id}>
              <img src={cat.img} alt={cat.name} />
              <h3>{cat.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="mission-parfs">
        <div className="mission-box">
          <h2>Our Mission</h2>
          <p>
            We aim to create a modern marketplace that elevates Moroccan artisans
            and brings sustainable fashion to a global audience.
          </p>
          <Link className="mission-btn" to="/category/4">Meet Our Artisans</Link>
        </div>
      </section>

      <section className="new-products-parfs">
        <h2>New Arrivals</h2>
        <div className="new-grid">
          {products.slice(0, 4).map(item => (
            <Link to={`/product/${item.id}`} className="new-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <p className="prod-name">{item.name}</p>
              <p className="prod-price">${item.price}</p>
            </Link>
          ))}
        </div>
      </section>

    <section className="testimonials-parfs">
      <h2>What Our Community Says</h2>
      <div className="testi-grid">
        <div className="testi-card">
          <p>“Every piece feels unique — you can truly see the artisan’s touch.”</p>
          <span>- Sofia M.</span>
        </div>
        <div className="testi-card">
          <p>“Supporting real Moroccan artists makes every purchase meaningful.”</p>
          <span>- Karim A.</span>
        </div>
      </div>
    </section>

      <Footer/>
    </div>
  );
}

export default Home;
