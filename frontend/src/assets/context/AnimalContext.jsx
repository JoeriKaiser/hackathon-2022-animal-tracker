import { createContext, useState } from 'react';

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [animalsArray, setAnimalsArray] = useState([]);
  const [statusArray, setStatusArray] = useState([]);
  const [chartArray, setChartArray] = useState([]);
  return (
    <GlobalContext.Provider
      value={{
        animal: [animalsArray, setAnimalsArray],
        status: [statusArray, setStatusArray],
        chart: [chartArray, setChartArray],
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalContextProvider };
