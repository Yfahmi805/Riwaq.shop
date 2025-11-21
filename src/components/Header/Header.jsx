import React from 'react'
import Logo from '../../assets/images/brand.jpg'
import LogoText from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { RiHeartLine, RiShoppingBagLine, RiUserLine, RiSearch2Line } from 'react-icons/ri'
import './Header.css'

function Header(){
        return (
                <div className="header">
                     <div className="header-parfs">
                        <div className="header-inner">
                                <Link to="/search" className="header-search">
                                    <RiSearch2Line />
                                </Link>
                                {/* Center: Logo */}
                                <div className="header-logo">
                                    <Link to="/">
                                        <img src={LogoText} alt="Riwaq" />
                                    </Link>
                                </div>
                                {/* Right: Icons */}
                                <div className="header-actions">
                                    <Link to="/cart"><RiShoppingBagLine /></Link>
                                </div>
                        </div>
                        {/* Navigation */}
                        <div className="header-nav">
                            <Link to="/category/1">Women</Link>
                            <Link to="/category/2">Men</Link>
                            <Link to="/category/3">Accessories</Link>
                            <Link to="/category/4">Artisan Picks</Link>
                        </div>
                    </div>
                </div>
        )
}
export default Header