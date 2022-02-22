import React from 'react';
import { useGlobalContext } from '../context';
import SearchForm from '../components/SearchForm';
import Drinks from '../components/Drinks';

const Home = () => {
    const { name, setName, isLoading, drinks } = useGlobalContext();
    return (
        <section className='section-center section'>
            <SearchForm {...{ name, setName }} />
            <Drinks {...{ isLoading, drinks }} />
        </section>
    );
};

export default Home;
