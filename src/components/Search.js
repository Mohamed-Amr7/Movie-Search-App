import React, { useState } from "react";

const Search = (props) => {
    const [inputValue, setInputValue] = useState("");

    const resetInputField = () => {
        setInputValue("");
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const performSearch = (e) => {
        e.preventDefault();
        props.search(inputValue);
        resetInputField();
    };

    return (
        <form className="search">
            <input
                placeholder="Search..."
                value={inputValue}
                onChange={handleInputChange}
                type="text"
                autoFocus={true}
            />
            <input onClick={performSearch} type="submit" value="SEARCH" />
        </form>
    );
};

export default Search;
