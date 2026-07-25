import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
    <header className='header'>
        <div className='header-container'>
             <Link to="/" className="logo">
                Lionix Studio
            </Link>
            <nav className='navigation'>
                <ul className="navigation-list">
                    <li className="nav-list-item">
                        <Link to="/about" className="nav-list-link">Про нас</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/project" className="nav-list-link">Проєкти</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/service" className="nav-list-link">Послуги</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/blog" className="nav-list-link">Блог</Link>
                    </li>
                </ul>
            </nav>
            <button>Зв'язатися</button>
        </div>
    </header>
    );
};

export default Header;