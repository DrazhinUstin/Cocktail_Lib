import { useState, useEffect } from 'react';
import { destructDrinksData } from './utils';
const API_ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/';

const useFetch = (urlParams) => {
    const [isLoading, setIsLoading] = useState(false);
    const [drinks, setDrinks] = useState([]);

    const getDrinks = async (url) => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.drinks) {
                const newDrinks = destructDrinksData(data.drinks);
                setDrinks(newDrinks);
            } else {
                setDrinks([]);
            }
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        getDrinks(`${API_ENDPOINT}${urlParams}`);
    }, [urlParams]);

    return { isLoading, drinks };
};

export default useFetch;
