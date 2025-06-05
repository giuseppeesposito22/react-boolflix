import axios from "axios";
import { useState } from "react";

function App() {
  // Set delle variabili
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState("");

  // Chiamate axios
  const handleSubmit = (query) => {
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
            setFilms([...movies, ...series]);
          });
      });
  };

  // Gestione bandiere per le lignue
  const language = {
    en: "gb",
    ja: "jp",
    ko: "kr",
  };

  const flagByLanguage = (lang) => {
    const flagLanguage = language[lang] ?? lang;

    return `https://flagcdn.com/w20/${flagLanguage}.png`;
  };

  const generateRate = (vote) => {
    let ratingStar = [];

    const rating = Math.floor(vote) / 2;

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        ratingStar.push(<i class="bi bi-star-fill"></i>);
      } else {
        ratingStar.push(<i class="bi bi-star"></i>);
      }
    }

    return ratingStar;
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
              {
                <img
                  src={`https://image.tmdb.org/t/p/w92${film.poster_path}`}
                  alt=""
                />
              }
              Titolo: {film.title || film.name}, Titolo originale:
              {film.original_title || film.original_name}, Lingua:
              {<img src={flagByLanguage(film.original_language)} alt="" />},
              Voto: {generateRate(film.vote_average)}
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default App;
