import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=c945e916203b3c6b11f34003f094de67&query=batman`
      )
      .then((res) => {
        console.log(res.data.results);
        setFilms(res.data.results);
      });
  }, []);

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="text"
              placeholder="Cerca film..."
              value={""}
              onChange={() => {}}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div className="container">
        <ul>
          {films.map((film) => (
            <li>
              {film.title}, {film.original_title}, {film.original_language},
              {film.voto_average}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
