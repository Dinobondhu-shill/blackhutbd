import { createContext } from "react";
import { useState } from 'react';

export const BlackContext = createContext();

const ContextProvider = ({children}) => {
  const [showCart, setShowCart] = useState(false);

  const values ={
    setShowCart, 
    showCart

  };

  return (
    <BlackContext.Provider value={values}>
      {children}
    </BlackContext.Provider>
  );
};

export default ContextProvider;