import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Cart from '../components/cart/cart';
import Products from '../data/products';
import './ProductDetails.css';
import { MdAddShoppingCart } from 'react-icons/md';

function ProductDetails({ showCart, cart, addToCart, removeFromCart, updateQuantity, hideCart }) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        const productData = Products.find(p => p.id === parseInt(id));
        setProduct(productData);

        // Get related products from the same category
        if (productData) {
            const related = Products
                .filter(p => p.categoryId === productData.categoryId && p.id !== productData.id)
                .slice(0, 4);
            setRelatedProducts(related);
        }
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const handleAddToCart = () => {
        const productWithQuantity = {
            ...product,
            quantity: selectedQuantity
        };
        addToCart(productWithQuantity);
    };

    return (
        <div className="product-details-page">
            <Header showCart={showCart} cart={cart} />
            <Cart
                cart={cart}
                hideCart={hideCart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
            />
            <div className="product-details-container">
                <div className="product-details-grid">
                    <div className="product-image-section">
                        <img src={product.image} alt={product.name} className="main-image" />
                    </div>

                    <div className="product-info-section">
                        <h1>{product.name}</h1>
                        <div className="artist-info">
                            <span>By </span>
                            <a href="#" className="artist-name">{product.artist}</a>
                        </div>

                        <div className="price-section">
                            <span className="price">{product.price.toFixed(2)} MAD</span>
                            <span className="stock">In Stock: {product.stockQnt} items</span>
                        </div>

                        <div className="quantity-section">
                            <label>Quantity:</label>
                            <select
                                value={selectedQuantity}
                                onChange={(e) => setSelectedQuantity(Number(e.target.value))}
                            >
                                {[...Array(product.stockQnt)].map((_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="action-buttons">
                            <button className="add-to-cart-btn" onClick={handleAddToCart}>
                                <MdAddShoppingCart /> Add to Cart
                            </button>
                            <button className="buy-now-btn">Buy Now</button>
                        </div>

                        <div className="product-description">
                            <h2>Product Description</h2>
                            <p>{product.description || "Experience the unique style and quality of our handpicked pre-loved fashion items. Each piece tells its own story and has been carefully selected to ensure both style and sustainability."}</p>
                        </div>
                    </div>
                </div>

                <div className="related-products-section">
                    <h2>Related Products</h2>
                    <div className="related-products-grid">
                        {relatedProducts.map(relatedProduct => (
                            <div key={relatedProduct.id} className="related-product-card">
                                <img src={relatedProduct.image} alt={relatedProduct.name} />
                                <h3>{relatedProduct.name}</h3>
                                <p className="artist">{relatedProduct.artist}</p>
                                <p className="price">{relatedProduct.price.toFixed(2)} MAD</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetails;