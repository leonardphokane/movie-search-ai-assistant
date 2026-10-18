import React, { useState } from 'react';
import MovieCard from '@components/MovieCard';
import SearchBar from '@components/SearchBar';
import { searchMovies } from '@services/omdb';

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) return;
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div>
      <h2>Home</h2>
      <p>Search for movies using the OMDb API.</p>

      {/* ✅ Reusable SearchBar */}
      <SearchBar
        query={query}
        onQueryChange={setQuery}
        onSearch={handleSearch}
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
        {movies.map((movie) => (
          <>
            {/* ✅ Pass imdbID for navigation */}
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              poster={movie.Poster}
              id={movie.imdbID}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
