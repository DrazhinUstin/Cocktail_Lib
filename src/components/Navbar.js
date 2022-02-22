import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getElementHeight } from '../utils';
import logo from '../assets/logo.svg';

const Navbar = () => {
    const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState(false);
    const navbarMenuRef = useRef(null);

    useEffect(() => {
        const navbarMenu = navbarMenuRef.current;
        if (isNavbarMenuOpen) {
            navbarMenu.style.height = `${getElementHeight(navbarMenu)}px`;
        } else {
            navbarMenu.style.height = '';
        }
    }, [isNavbarMenuOpen]);

    const handleClick = (e) => {
        if (!e.target.closest('a')) return;
        setIsNavbarMenuOpen(false);
    };

    return (
        <div className='navbar-wrapper'>
            <section className='navbar section-center' onClick={handleClick}>
                <header className='navbar-header'>
                    <Link to={'.'} className='navbar-logo'>
                        <img src={logo} alt='logo' />
                        <h1>cocktail lib</h1>
                    </Link>
                    <button
                        className={`navbar-toggle-btn ${isNavbarMenuOpen && 'active'}`}
                        onClick={() => setIsNavbarMenuOpen((oldState) => !oldState)}
                    >
                        <div></div>
                    </button>
                </header>
                <nav className='navbar-menu' ref={navbarMenuRef}>
                    <Link to={'.'}>home</Link>
                    <Link to={'about'}>about</Link>
                    <a
                        href='https://github.com/DrazhinUstin/Cocktail_Lib'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        github
                    </a>
                </nav>
            </section>
        </div>
    );
};

export default Navbar;
