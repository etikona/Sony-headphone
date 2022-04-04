import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2><span>Sony</span> Headphone</h2>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/review">Review</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/about">About</Link>

                </ul>
            </nav>
        </div>
    );
};

export default Header;