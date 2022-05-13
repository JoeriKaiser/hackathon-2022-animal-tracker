import { createContext, useState } from 'react';

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [animalsArray, setAnimalsArray] = useState([]);
  const [statusArray, setStatusArray] = useState([]);
  return (
    <GlobalContext.Provider
      value={{
        animal: [animalsArray, setAnimalsArray],
        status: [statusArray, setStatusArray],
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalContextProvider };
