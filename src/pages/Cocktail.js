import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SingleDrink from '../components/SingleDrink';

const Cocktail = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [drink, setDrink] = useState(null);

    const getDrinkByID = async () => {
        setLoading(true);
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            const { drinks } = data;
            if (drinks) {
                const newDrinks = drinks.map((drink) => {
                    const {
                        idDrink: id,
                        strDrink: name,
                        strAlcoholic: alcoholic,
                        strCategory: category,
                        strDrinkThumb: image,
                        strGlass: glass,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                        strIngredient6,
                        strIngredient7,
                        strIngredient8,
                        strIngredient9,
                        strIngredient10,
                        strInstructions: instructions,
                    } = drink;
                    return {
                        id,
                        name,
                        alcoholic,
                        category,
                        image,
                        glass,
                        ingredients: [
                            strIngredient1,
                            strIngredient2,
                            strIngredient3,
                            strIngredient4,
                            strIngredient5,
                            strIngredient6,
                            strIngredient7,
                            strIngredient8,
                            strIngredient9,
                            strIngredient10,
                        ],
                        instructions,
                    };
                });
                setDrink(newDrinks[0]);
            } else {
                setDrink(null);
            }
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        getDrinkByID();
    }, [id]);

    if (loading) {
        return (
            <section className='section section-center'>
                <h2 className='section-title'>loading...</h2>
            </section>
        );
    }

    if (!drink) {
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
            <h2 className='section-title'>{drink.name}</h2>
            <SingleDrink {...drink} />
            <Link to={'/'} className='btn'>
                back home
            </Link>
        </section>
    );
};

export default Cocktail;
