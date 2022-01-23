import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <section className='section section-center' style={{ textAlign: 'center' }}>
            <h2 className='section-title alert-message'>page not found...</h2>
            <Link to={'/'} className='btn'>
                back home
            </Link>
        </section>
    );
};

export default PageNotFound;
