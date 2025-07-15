"use client";

import { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHandler, setSearchHandler] = useState(() => () => {});

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, searchHandler, setSearchHandler }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);