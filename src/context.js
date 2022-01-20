import React, { useContext, useState, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('');
    const [drinks, setDrinks] = useState([]);

    const fetchData = async () => {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
        setLoading(true);
        try {
            const response = await fetch(`${url}${name}`);
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
                        ],
                        instructions,
                    };
                });
                setDrinks(newDrinks);
            } else {
                setDrinks([]);
            }
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [name]);

    return (
        <AppContext.Provider value={{ loading, name, setName, drinks }}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
