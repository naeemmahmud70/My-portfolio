import React from 'react';
import MainHeader from './MainHeader/MainHeader';
import Navbar from './Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className="header-bg">
            <div className="container">
            <Navbar></Navbar>
            <MainHeader></MainHeader>
            </div>
        </div>
    );
};

export default Header;