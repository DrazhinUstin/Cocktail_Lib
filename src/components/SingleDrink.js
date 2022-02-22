import React from 'react';
import { Link } from 'react-router-dom';

const SingleDrink = ({ image, name, category, alcoholic, glass, instructions, ingredients }) => {
    return (
        <article className='single-drink'>
            <img className='single-drink-image' src={image} alt={name} />
            <div className='single-drink-info'>
                <h4>
                    category: <span>{category}</span>
                </h4>
                <h4>
                    type: <span>{alcoholic}</span>
                </h4>
                <h4>
                    glass: <span>{glass}</span>
                </h4>
                {instructions && (
                    <>
                        <h4>instructions:</h4>
                        <p>{instructions}</p>
                    </>
                )}
                <h4>ingredients:</h4>
                <div className='ingredients'>
                    {ingredients.map((item, index) => {
                        return (
                            item && (
                                <Link key={index} to={`/ingredient/${item}`}>
                                    <img
                                        src={`https://www.thecocktaildb.com/images/ingredients/${item}-Small.png`}
                                    />
                                    <p>{item}</p>
                                </Link>
                            )
                        );
                    })}
                </div>
            </div>
        </article>
    );
};

export default SingleDrink;
