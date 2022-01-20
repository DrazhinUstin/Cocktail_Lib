import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar-wrapper'>
            <div className='navbar section-center'>
                <div className='navbar-logo'>
                    <h1>Cocktails World</h1>
                </div>
                <ul className='navbar-menu'>
                    <li>
                        <Link to={'.'}>home</Link>
                    </li>
                    <li>
                        <Link to={'about'}>about</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
