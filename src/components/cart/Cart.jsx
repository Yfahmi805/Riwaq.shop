import React from "react";
import './Cart.css';
import { IoClose } from "react-icons/io5";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

function Cart({ cart, hideCart, removeFromCart, updateQuantity }) {
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
    };

    return (
        <div className="cart">
            <div className="CartHead">
                <h2>My Cart ({cart.length})</h2>
                <button className="CloseSidebar" onClick={hideCart}><IoClose /></button>
            </div>

            <div className="cart-items">
                {cart.length === 0 ? (
                    <div className="empty-cart">
                        <h3>Your cart is empty</h3>
                        <p>Add some items to start shopping</p>
                    </div>
                ) : (
                    cart.map((item, index) => (
                        <div className="cart-item" key={index}>
                            <img src={item.image} alt={item.name} />
                            <div className="cart-item-content">
                                <h3>{item.name}</h3>
                                <p>{item.artist}</p>
                                <span>{item.price.toFixed(2)} MAD</span>
                                <div className="quantity-controls">
                                    <button onClick={() => updateQuantity(index, (item.quantity || 1) - 1)}>
                                        <FiMinus />
                                    </button>
                                    <span>{item.quantity || 1}</span>
                                    <button onClick={() => updateQuantity(index, (item.quantity || 1) + 1)}>
                                        <FiPlus />
                                    </button>
                                </div>
                            </div>
                            <button className="remove-item" onClick={() => removeFromCart(index)}>
                                <FiTrash2 />
                            </button>
                        </div>
                    ))
                )}
            </div>

            {cart.length > 0 && (
                <div className="cart-footer">
                    <div className="cart-total">
                        <h3>Total</h3>
                        <span>{calculateTotal().toFixed(2)} MAD</span>
                    </div>
                    <button className="checkout-btn">Proceed to Checkout</button>
                </div>
            )}
        </div>
    );
}

export default Cart;