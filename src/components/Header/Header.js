import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

// Header Component 
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/Inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;