import React from 'react'
import './Footer.css'
import LogoText from '../../assets/images/logo.png'
function footer(){
    return(
        <div className="footer">
            <div className="footer-inner">


                <div className="footer-left">
                    <h3>Friends let friends know about best products</h3>
                    <p>and content.</p>

                    <div className="footer-input">
                        <input type="email" placeholder="Enter email address.." />
                        <button>➤</button>
                    </div>
                </div>

                <div className="footer-right">
                    <div className="footer-links">
                        <div className="col">
                            <a href="/">Shop</a>
                            <a href="/">FAQ</a>
                            <a href="/">Shipping & Returns</a>
                            <a href="/">About</a>
                            <a href="/">Download App</a>
                        </div>
                        <div className="col">
                            <a href="/">Terms and Conditions</a>
                            <a href="/">Privacy Policy</a>
                            <a href="/">Credits</a>
                            <a href="/">Cookies Policy</a>
                            <a href="/">Contact Us</a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="footer-brand">
                <img src={LogoText} alt="Riwaq" />
            </div>
            <p className="footer-copy">© Riwaq 2024</p>
        </div>

    )
}

export default footer