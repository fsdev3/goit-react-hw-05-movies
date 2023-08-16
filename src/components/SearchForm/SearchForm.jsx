import React, { useState } from 'react';

const SearchForm = ({ setSearchParams }) => {
  const [searchValue, setSearchValue] = useState('');

  const onChange = evt => {
    return setSearchValue(evt.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.searchValue.value;
    try {
      setSearchParams({ query: searchValue.trim() });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Search Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchValue"
          value={searchValue}
          onChange={onChange}
          required
          placeholder="Input movie name"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;