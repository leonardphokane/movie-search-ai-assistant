import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  id: string;
  title: string;
  year: string;
  poster: string;
}

const MovieCard: React.FC<Props> = ({ id, title, year, poster }) => {
  const addFavorite = () => {
    const stored = localStorage.getItem("favorites");
    const favorites = stored ? JSON.parse(stored) : [];
    const exists = favorites.some((movie: any) => movie.imdbID === id);

    if (!exists) {
      const newFav = [...favorites, { imdbID: id, Title: title, Year: year, Poster: poster }];
      localStorage.setItem("favorites", JSON.stringify(newFav));
      alert(`${title} added to favorites!`);
    } else {
      alert(`${title} is already in favorites.`);
    }
  };

  return (
    <div style={{ border: "1px solid #444", padding: "0.5rem" }}>
      <Link to={`/movie/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={poster} alt={title} style={{ width: "100%" }} />
        <h3>{title}</h3>
        <p>{year}</p>
      </Link>
      <button onClick={addFavorite} style={{ marginTop: "0.5rem" }}>
        Add to Favorites
      </button>
    </div>
  );
};

export default MovieCard;
