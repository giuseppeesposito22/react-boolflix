import { useState } from "react";

export default function ProductionCard({ production }) {
  const [isOver, setIsOver] = useState(false);

  // Gestione bandiere per le lignue
  const language = {
    en: "gb",
    ja: "jp",
    ko: "kr",
  };

  const flagByLanguage = (lang) => {
    const flagLanguage = language[lang] ?? lang;

    return `https://flagcdn.com/w40/${flagLanguage}.png`;
  };

  // Generazione delle stelle per il rating
  const generateRate = (vote) => {
    let ratingStar = [];

    const rating = Math.floor(vote) / 2;

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        ratingStar.push(<i key={i} className="bi bi-star-fill"></i>);
      } else {
        ratingStar.push(<i key={i} className="bi bi-star"></i>);
      }
    }

    return ratingStar;
  };

  return (
    <div className="col mb-5">
      <div
        className="card h-100"
        onMouseEnter={() => {
          setIsOver(true);
        }}
        onMouseLeave={() => {
          setIsOver(false);
        }}
      >
        {isOver ? (
          <div className="card-body bg-black text-bg-primary h-100">
            Titolo: {production.title || production.name} <br />
            Titolo originale:{" "}
            {production.original_title || production.original_name} <br />
            Lingua:{" "}
            {
              <img src={flagByLanguage(production.original_language)} alt="" />
            }{" "}
            <br />
            Voto: {generateRate(production.vote_average)} <br />
            Overview:{" "}
            {production.overview ? production.overview : "Nessuna descrizione"}
          </div>
        ) : (
          <img
            className="img-poster"
            src={
              production.poster_path
                ? `https://image.tmdb.org/t/p/w342${production.poster_path}`
                : "src/assets/img/img-placeholder.jpg"
            }
            alt=""
          />
        )}
      </div>
    </div>
  );
}
