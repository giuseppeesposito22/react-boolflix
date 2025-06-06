import { createContext, useContext } from "react";
import { useState } from "react";
import axios from "axios";

const ProductionContext = createContext();

function ProductionProvider({ children }) {
  const [productions, setProductions] = useState([]);

  // Chiamate axios
  const fetchProductions = (query) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=c945e916203b3c6b11f34003f094de67&query=${query}`
      )
      .then((res) => {
        const movies = res.data.results;

        axios
          .get(
            `https://api.themoviedb.org/3/search/tv?api_key=c945e916203b3c6b11f34003f094de67&query=${query}`
          )
          .then((res) => {
            const series = res.data.results;
            setProductions([...movies, ...series]);
          });
      });
  };

  const productionData = { productions, setProductions, fetchProductions };

  return (
    <ProductionContext.Provider value={productionData}>
      {children}
    </ProductionContext.Provider>
  );
}

function useProduction() {
  return useContext(ProductionContext);
}

export { ProductionProvider, useProduction };
