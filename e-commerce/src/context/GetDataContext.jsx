import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

function DataProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const d = await res.json();
        setData(d);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  //   function getData() {
  //     return data;
  //   }

  function filterData(id) {}

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
}

export { DataProvider };
