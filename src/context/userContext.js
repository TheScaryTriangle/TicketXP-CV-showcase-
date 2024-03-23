import React, { createContext, useContext, useState } from "react";

const ContractContext = createContext();

export const useContractContext = () => {
  return useContext(ContractContext);
};

export const ContractProvider = ({ children }) => {
  const [contract, setContract] = useState(null);
  
  return (
    <ContractContext.Provider value={{ contract, setContract }}>
      {children}
    </ContractContext.Provider>
  );
};
