import React, { useState } from 'react';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchInput = e => {
        setSearchValue(e.target.value);
    };
    
    const resetInputField = () => {
        setSearchValue('')
    };

    const callSearch = e => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }


    return(
        <form className="search">
            <input className="input" value={searchValue}
            onChange={handleSearchInput}
            type='text'
            />
            <input onClick={callSearch}
            type="submit" className="submit" value='SEARCH'
            />
        </form>
    )
}

export default Search;
