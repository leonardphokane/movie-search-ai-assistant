const API_KEY = import.meta.env.VITE_OMDB_API_KEY; // 🔑 Loaded from .env
const BASE_URL = "https://www.omdbapi.com/";

export interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
}

export async function searchMovies(query: string): Promise<Movie[]> {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
    const data = await response.json();

    if (data.Response === "True") {
      return data.Search as Movie[];
    } else {
      console.error("OMDb Error:", data.Error);
      return [];
    }
  } catch (error) {
    console.error("Fetch Error:", error);
    return [];
  }
}

export async function getMovieDetails(id: string): Promise<Movie | null> {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
    const data = await response.json();

    if (data.Response === "True") {
      return data as Movie;
    } else {
      console.error("OMDb Error:", data.Error);
      return null;
    }
  } catch (error) {
    console.error("Fetch Error:", error);
    return null;
  }
}
