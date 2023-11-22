import React, { createContext, useContext, useState } from "react";

const apiContext = createContext();

export const useApiContext = () => {
  return useContext(apiContext);
};

export const api = ({ children }) => {
  const [contract, setContract] = useState(null);
  
  return (
    <ContractContext.Provider value={{ contract, setContract }}>
      {children}
    </ContractContext.Provider>
  );
};
