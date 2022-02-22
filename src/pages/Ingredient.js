import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../useFetch';
import Drinks from '../components/Drinks';

const Ingredient = () => {
    const { name } = useParams();
    const { isLoading, drinks, ingredients, getData } = useFetch(`search.php?i=${name}`);

    useEffect(() => {
        if (!ingredients[0]) return;
        const { strIngredient: ingredient } = ingredients[0];
        getData(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    }, [ingredients]);

    if (isLoading) {
        return <div className='loading'></div>;
    }

    if (!ingredients[0]) {
        return (
            <section className='section section-center' style={{ textAlign: 'center' }}>
                <h2 className='section-title alert-message'>no such ingredient...</h2>
                <Link to={'/'} className='btn'>
                    back home
                </Link>
            </section>
        );
    }

    const { strIngredient: ingredient, strDescription: description } = ingredients[0];
    return (
        <section className='section section-center'>
            <h2 className='section-title'>{ingredient}</h2>
            <article className='single-ingredient'>
                <img
                    src={`https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`}
                    alt={ingredient}
                />
                {description && <p>{description}</p>}
            </article>
            {drinks.length ? <Drinks drinks={drinks} /> : null}
            <Link to={'/'} className='btn'>
                back home
            </Link>
        </section>
    );
};

export default Ingredient;
