import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '@services/omdb';
import MovieCard from '@components/MovieCard';

const SearchResultsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (query.trim()) {
        const results = await searchMovies(query);
        setMovies(results);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <div>
      <h2>Results for "{query}"</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
            id={movie.imdbID}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
