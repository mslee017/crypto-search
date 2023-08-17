import { useState, useEffect } from 'react';

const cache = {};

const fetchData = async query => {
  if (cache[query]) {
    return cache[query];
  }

  const response = await fetch(
    `https://www.coinbase.com/api/v2/assets/search?query=${query}&limit=10`
  );

  cache[query] = response;
  return await response.json();
};

const useAssetSearch = query => {
  const [searchAssets, setSearchAssets] = useState([]);

  useEffect(() => {
    if (query.trim()) {
      const response = fetchData(query);
      response.then(assets => setSearchAssets(assets));
    }
  }, [query]);

  return searchAssets;
};

export default useAssetSearch;
