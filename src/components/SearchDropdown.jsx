import React from 'react';
import '../App.css';

// FOR TOMORROW
// ON CLICK FUNCTION ON EACH LI
// Create click handler function. Should the state be derived? Check project #1 again. Should probably be created at App level

const SearchDropdown = ({ value, onClick }) => {
  return (
    <ul className="dropdown">
      {value?.data?.map(btc => (
        <li key={btc.id} className="dropdown-element" onClick={onClick}>
          {btc.name}
        </li>
      ))}
    </ul>
  );
};

export default SearchDropdown;
