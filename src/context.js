import React, { useContext, useState, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('');
    const [drinks, setDrinks] = useState([]);

    const getDrinks = async () => {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
        setLoading(true);
        try {
            const response = await fetch(`${url}${name}`);
            const data = await response.json();
            const { drinks } = data;
            if (drinks) {
                const newDrinks = drinks.map((drink) => {
                    const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
                    return { id, name, image };
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
        getDrinks();
    }, [name]);

    return (
        <AppContext.Provider value={{ loading, name, setName, drinks }}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
