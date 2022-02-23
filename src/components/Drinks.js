import React from 'react';
import { Link } from 'react-router-dom';

const Drinks = ({ isLoading, drinks }) => {
    if (isLoading) {
        return <div className='loading'></div>;
    }

    if (!drinks.length) {
        return <p className='alert-message'>There are no cocktails matching your search...</p>;
    }

    return (
        <>
            <h2 className='section-title'>Cocktails</h2>
            <div className='drinks'>
                {drinks.map((drink) => {
                    const { id, name, image } = drink;
                    return (
                        <Link to={`/cocktail/${id}`} key={id}>
                            <article>
                                <img src={image} alt={name} />
                                <h3>{name}</h3>
                            </article>
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default Drinks;
