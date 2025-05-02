import React from 'react';
import './Footer.css';
import LogoImg from '../../assets/images/logo.png'

import { FaFacebook,FaPinterest } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={LogoImg} alt="Riwaq" />
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">Trending</a></li>
                        <li><a href="#">Sellers Space</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="#" ><FaFacebook className='icon'/></a></li>
                        <li><a href="#"><FaPinterest className='icon'/></a></li>
                        <li><a href="#"><RiInstagramFill className='icon'/></a></li>
                    </ul>
                </div>
            </div>
            <p>&copy; 2025 Riwaq. All rights reserved.</p>
        </footer>
    );
};

export default Footer;