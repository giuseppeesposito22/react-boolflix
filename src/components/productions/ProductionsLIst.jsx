import { useProduction } from "../../contexts/ProductionContext";

export default function ProductionsList() {
  const { productions } = useProduction();

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
    <>
      {productions.map((production) => (
        <ul key={production.id}>
          <li>
            {
              <img
                src={`https://image.tmdb.org/t/p/w92${production.poster_path}`}
                alt=""
              />
            }
            Titolo: {production.title || production.name}, Titolo originale:
            {production.original_title || production.original_name}, Lingua:
            {<img src={flagByLanguage(production.original_language)} alt="" />},
            Voto:
            {generateRate(production.vote_average)}
          </li>
        </ul>
      ))}
    </>
  );
}
