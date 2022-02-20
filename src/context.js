import React, { useContext, useState } from 'react';
import useFetch from './useFetch';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [name, setName] = useState('');
    const { isLoading, drinks } = useFetch(`search.php?s=${name}`);

    return (
        <AppContext.Provider value={{ isLoading, name, setName, drinks }}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
