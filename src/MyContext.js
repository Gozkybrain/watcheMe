import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (input) => {
    setSearchInput(input);
  };

  const contextValue = {
    searchInput,
    handleSearchInputChange
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
