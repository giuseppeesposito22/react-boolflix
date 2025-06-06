import { useState } from "react";
import { useProduction } from "../contexts/ProductionContext";

export default function Filter() {
  const [query, setQuery] = useState("");

  const { fetchProductions } = useProduction();

  const handleFilter = (e) => {
    e.preventDefault();
    fetchProductions(query);
  };

  return (
    <form className="d-flex" onSubmit={handleFilter}>
      <input
        className="form-control me-2"
        type="text"
        placeholder="Cerca film..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button className="btn btn-outline-danger" type="submit">
        Cerca
      </button>
    </form>
  );
}
