import React, { useState } from "react";
import { searchMovies } from "../api";
import { Link } from "react-router-dom";
import "./movie.css";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const Movies: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const results = await searchMovies(query);
      setMovies(results);
    } catch (err) {
      setError("An error occurred while searching. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="movies-container">
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        {movies.map((movie) => (
          <ul key={movie.id}>
            <li>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Movies;
