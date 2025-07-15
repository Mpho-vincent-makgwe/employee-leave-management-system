"use client";

import { createContext, useState, useContext, useEffect } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHandler, setSearchHandler] = useState(() => () => {});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, searchHandler, setSearchHandler }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    console.warn('useSearch used outside SearchProvider - returning default values');
    return {
      searchTerm: '',
      setSearchTerm: () => {},
      searchHandler: () => {},
      setSearchHandler: () => {}
    };
  }
  return context;
};