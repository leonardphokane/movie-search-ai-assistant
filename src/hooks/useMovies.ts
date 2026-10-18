import { useState } from 'react';
import { searchMovies } from '@services/omdb';

export const useMovies = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (query: string) => {
    if (!query.trim()) return;
    setLoading(true);
    const results = await searchMovies(query);
    setMovies(results);
    setLoading(false);
  };

  return { movies, fetchMovies, loading };
};
