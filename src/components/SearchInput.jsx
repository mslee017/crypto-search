import React from 'react';

const SearchInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="search-input"
      onChange={onChange}
      value={value}
    />
  );
};

export default SearchInput;
