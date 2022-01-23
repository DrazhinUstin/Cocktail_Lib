import React from 'react';
import SearchForm from '../components/SearchForm';
import Drinks from '../components/Drinks';

const Home = () => {
    return (
        <section className='section-center section'>
            <SearchForm />
            <Drinks />
        </section>
    );
};

export default Home;
