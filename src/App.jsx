import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState("");

  const handleSubmit = (query) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=c945e916203b3c6b11f34003f094de67&query=${query}`
      )
      .then((res) => {
        const movies = res.data.results;
        console.log(res.data.results);

        axios
          .get(
            `https://api.themoviedb.org/3/search/tv?api_key=c945e916203b3c6b11f34003f094de67&query=${query}`
          )
          .then((res) => {
            const series = res.data.results;
            setFilms([...movies, ...series]);
          });
      });
  };

  const language = {
    en: "gb",
    it: "it",
    fr: "fr",
    de: "de",
    es: "es",
    ja: "jp",
    ko: "kr",
    ru: "ru",
  };

  const flagByLanguage = (lang) => {
    return `https://flagcdn.com/w20/${language[lang]}.png`;
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <form
            className="d-flex"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(query);
            }}
          >
            <input
              className="form-control me-2"
              type="text"
              placeholder="Cerca film..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div className="container">
        {films.map((film) => (
          <ul key={film.id}>
            <li>
              Titolo: {film.title || film.name}, Titolo originale:
              {film.original_title || film.original_name}, Lingua:
              {<img src={flagByLanguage(film.original_language)} alt="" />},
              Voto: {film.vote_average}
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default App;
