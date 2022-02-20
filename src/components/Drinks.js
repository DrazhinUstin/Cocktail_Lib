import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Drinks = () => {
    const { isLoading, drinks } = useGlobalContext();

    if (isLoading) {
        return <div className='loading'></div>;
    }

    if (!drinks.length) {
        return <p className='alert-message'>There are no cocktails matching your search...</p>;
    }

    return (
        <>
            <h2 className='section-title'>Cocktails</h2>
            <ul className='drinks-container'>
                {drinks.map((drink) => {
                    const { id, name, image } = drink;
                    return (
                        <Link to={`cocktail/${id}`} key={id}>
                            <article>
                                <img src={image} alt={name} />
                                <h3>{name}</h3>
                            </article>
                        </Link>
                    );
                })}
            </ul>
        </>
    );
};

export default Drinks;
