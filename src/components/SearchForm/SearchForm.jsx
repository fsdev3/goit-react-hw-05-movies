import React from 'react';

const SearchForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.searchValue.value;
    console.log('searchValue', searchValue);
  };
  return (
    <div>
      <h2>Search Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchValue"
          required
          placeholder="Input movie name"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default SearchForm;
