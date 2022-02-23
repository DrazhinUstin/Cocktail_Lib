import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollTopBtn = () => {
    const [isScrollEnough, setIsScrollEnough] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > document.documentElement.clientHeight) {
            setIsScrollEnough(true);
        } else {
            setIsScrollEnough(false);
        }
    };

    return (
        <button
            className={`scroll-top-btn ${isScrollEnough && 'show'}`}
            onClick={() => window.scrollTo(0, 0)}
        >
            <FaArrowUp />
        </button>
    );
};

export default ScrollTopBtn;
