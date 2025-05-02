import React from 'react';
import './products.css';
import { MdAddShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Products({ products, addToCart }) {
    return (
        <div className="product-list">
            {products.map((product) => (
                <div className="product-item" key={product.id}>
                    <Link to={`/product/${product.id}`} className="product-link">
                        <img src={product.image} alt={product.name} />
                        <h3 className="productName">{product.name}</h3>
                        <p className="artist">{product.artist}</p>
                    </Link>
                    <div className="cardBottom">
                        <p className="price">{product.price.toFixed(2)} MAD</p>
                        <button
                            className="AddToCart"
                            onClick={() => addToCart(product)}
                        >
                            <MdAddShoppingCart />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products;