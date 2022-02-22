import { useState, useEffect } from 'react';
import { destructDrinksData } from './utils';
const API_ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/';

const useFetch = (urlParams) => {
    const [isLoading, setIsLoading] = useState(true);
    const [drinks, setDrinks] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    const getData = async (url) => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.drinks) {
                const newDrinks = destructDrinksData(data.drinks);
                setDrinks(newDrinks);
            } else if (data.ingredients) {
                setIngredients(data.ingredients);
            } else {
                setDrinks([]);
            }
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        getData(`${API_ENDPOINT}${urlParams}`);
    }, [urlParams]);

    return { isLoading, drinks, ingredients, getData };
};

export default useFetch;
