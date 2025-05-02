import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';
import LogoImg from '../../assets/images/logo.png'
import { IoSearch } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { FaFacebook, FaPinterest } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

function Header({ showCart, cart }) {
    const showSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.style.display = 'block';
        }
    };

    const hideSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.style.display = 'none';
        }
    };

    return (
        <header>
            <button className="sidebarBtn" onClick={showSidebar}>
                <LuMenu className='icon' />
            </button>
            <div className="sidebar">
                <div className="logo">
                    <Link to={"/"}>
                        <img src={LogoImg} alt="Riwaq" />
                    </Link>
                    <button className="CloseSidebar" onClick={hideSidebar}>
                        < IoClose className='icon' />
                    </button>
                </div>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link href={""}>About</Link></li>
                    <li><Link href="#">Categories</Link></li>
                    <li><Link href="#">Trending</Link></li>
                    <li><Link href="#">Sellers Space</Link></li>
                    <li><Link href="#">Signup</Link></li>
                </ul>
                <div className="socail-icons">
                    <Link href="#" ><FaFacebook className='icon' /></Link>
                    <Link href="#"><FaPinterest className='icon' /></Link>
                    <Link href="#"><RiInstagramFill className='icon' /></Link>
                </div>
            </div>
            <div className="logo">
                <Link to={"/"}>
                    <img src={LogoImg} alt="Riwaq" />
                </Link>
            </div>
            <div className="navbar">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link href="#">About</Link></li>
                    <li><Link href="#">Categories</Link></li>
                    <li><Link href="#">Trending</Link></li>
                    <li><Link href="#">Sellers Space</Link></li>
                </ul>
            </div>
            <div className="actionBtns">
                <button className="Search" >
                    <Link to="/search">
                        <IoSearch className='icon' />
                    </Link>
                </button>
                <button className="ShoppingBag" onClick={showCart}>
                    <Link to="">
                        <BiShoppingBag className='icon' />
                        <span style={
                            {
                                padding: "3px 5px",
                                fontSize: "15px",
                                backgroundColor: "var(--primary-color)",
                                color: "#ffff",
                                borderRadius: "50%",
                            }
                        }>{cart.length}</span>
                    </Link>

                </button>
                <button className="Login">
                    <Link to="">
                        <FiUser className='icon' />
                    </Link>
                </button>
            </div>
        </header>
    );
};

export default Header;