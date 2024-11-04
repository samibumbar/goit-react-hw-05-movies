import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
  Link,
} from "react-router-dom";
import "./app.css";

const Home = lazy(() => import("./components/home/home"));
const Movies = lazy(() => import("./components/movie/movie"));
const MovieDetails = lazy(
  () => import("./components/movies-details/movies-details")
);
const Cast = lazy(() => import("./components/movies-details/cast"));
const Reviews = lazy(() => import("./components/movies-details/reviews"));

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="nav-bar">
      <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
        Home
      </Link>
      <Link
        to="/movies"
        className={location.pathname.startsWith("/movies") ? "active-link" : ""}
      >
        Movies
      </Link>
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
