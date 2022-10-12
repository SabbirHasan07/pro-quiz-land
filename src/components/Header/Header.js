import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/sabbir-removebg-preview.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header'>
                <img src={logo} alt="" />
                <h1>Pro Quiz Land</h1>
            </div>
            <div>
                <div className='btn-container' >
                    <Link className='link' to='/'>Topics</Link>
                    <Link className='link' to='/statistics'>Statistics</Link>
                    <Link className='link' to='/blog'>Blog</Link>
                </div>

            </div>
        </div>
    );
};

export default Header;