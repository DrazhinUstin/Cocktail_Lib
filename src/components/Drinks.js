import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Drinks = () => {
    const { loading, drinks } = useGlobalContext();

    if (loading) {
        return (
            <div className='section-title'>
                <h2>loading...</h2>
            </div>
        );
    }

    if (!drinks.length) {
        return (
            <div className='section-title'>
                <p>There are no cocktails matching your search...</p>
            </div>
        );
    }

    return (
        <>
            <div className='section-title'>
                <h2>Cocktails</h2>
            </div>
            <ul className='drinks-container'>
                {drinks.map((drink) => {
                    const { id, name, image } = drink;
                    return (
                        <Link to={'.'} key={id}>
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
