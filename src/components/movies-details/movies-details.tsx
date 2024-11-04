import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { fetchMovieDetails } from "../api";
import "./styles.css";

interface MovieDetailsData {
  title: string;
  overview: string;
  genres: { name: string }[];
  poster_path: string;
  vote_average: number;
}

const MovieDetails: React.FC = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<MovieDetailsData | null>(null);

  useEffect(() => {
    const loadMovieDetails = async () => {
      if (movieId) {
        const details = await fetchMovieDetails(movieId);
        setMovie(details);
      }
    };
    loadMovieDetails();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <div className="details-container">
        <button onClick={() => window.history.back()}>
          {" "}
          <i className="fa-solid fa-left-long"></i>Go back
        </button>
        <h2>
          {movie.title} ({new Date().getFullYear()})
        </h2>
        <div className="details-item">
          <div className="image-container">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className="information-container">
            <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
        </div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
