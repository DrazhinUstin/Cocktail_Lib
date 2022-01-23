import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
    const { name, setName } = useGlobalContext();
    return (
        <form className='search-form'>
            <div className='search-form-field'>
                <label htmlFor='name'>search your favorite cocktail</label>
                <input
                    type='text'
                    id='name'
                    placeholder='Enter the name of the cocktail'
                    autoComplete='off'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
        </form>
    );
};

export default SearchForm;
