import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  query: string;
  onQueryChange: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ query, onQueryChange }) => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Search movies..."
        style={{ padding: "0.5rem", marginRight: "0.5rem" }}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
