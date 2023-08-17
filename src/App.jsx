import { useState } from 'react';
import SearchInput from './components/SearchInput';
import SearchDropdown from './components/SearchDropdown';
import useAssetSearch from './hooks/useAssetSearch';
import useDebounce from './hooks/useDebounce';
import './App.css';

function App() {
  const [cryptoSearchQuery, setCryptoSearchQuery] = useState('');
  const [userClickedDropdown, setUserClickedDropdown] = useState(false);
  const debouncedCryptoSeachQuery = useDebounce(cryptoSearchQuery);

  const handleCryptoSearchChange = event => {
    setUserClickedDropdown(false);
    setCryptoSearchQuery(event.target.value);
  };

  const handleCryptoSearchClick = event => {
    const content = event.target.textContent;
    setCryptoSearchQuery(content);
    setUserClickedDropdown(true);
  };

  const results = useAssetSearch(debouncedCryptoSeachQuery);

  return (
    <>
      <SearchInput
        value={cryptoSearchQuery}
        onChange={handleCryptoSearchChange}
      />
      {cryptoSearchQuery && !userClickedDropdown ? (
        <SearchDropdown value={results} onClick={handleCryptoSearchClick} />
      ) : null}
    </>
  );
}

export default App;
