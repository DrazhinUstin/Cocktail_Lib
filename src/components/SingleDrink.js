import React from 'react';

const SingleDrink = ({ image, name, category, alcoholic, glass, instructions, ingredients }) => {
    return (
        <article className='single-drink'>
            <img src={image} alt={name} />
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
                {instructions ? (
                    <>
                        <h4>instructions:</h4>
                        <p>{instructions}</p>
                    </>
                ) : (
                    ''
                )}
                <h4>ingredients:</h4>
                <ul>
                    {ingredients.map((item, index) => {
                        return item ? <li key={index}>{item}</li> : '';
                    })}
                </ul>
            </div>
        </article>
    );
};

export default SingleDrink;
