import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../useFetch';
import SingleDrink from '../components/SingleDrink';

const Cocktail = () => {
    const { id } = useParams();
    const { isLoading, drinks } = useFetch(`lookup.php?i=${id}`);

    if (isLoading) {
        return <div className='loading'></div>;
    }

    if (!drinks[0]) {
        return (
            <section className='section section-center' style={{ textAlign: 'center' }}>
                <h2 className='section-title alert-message'>no such cocktail...</h2>
                <Link to={'/'} className='btn'>
                    back home
                </Link>
            </section>
        );
    }

    return (
        <section className='section section-center'>
            <h2 className='section-title'>{drinks[0].name}</h2>
            <SingleDrink {...drinks[0]} />
            <Link to={'/'} className='btn'>
                back home
            </Link>
        </section>
    );
};

export default Cocktail;
