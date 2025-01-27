import React, { useState, useEffect } from "react";
import "./banner.css";
import MovieContent from "../components/MovieContent";
import MovieTrailer from "../components/MovieTrailer";
import MovieSwiper from "../components/MovieSwiper";

function Banner() {
  const [movies, setMovies] = useState([]);
  let [activeId, setActiveId] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonfakery.com/movies/infinite-scroll"
      );
      const result = await response.json();
      const filteredMovies = removeSomeMovies(result.data);
      setMovies(filteredMovies);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //removing two movies from the dataset because not good content
  function removeSomeMovies(movies) {
    const idsToRemove = [10490, 83896];
    const filteredMovies = movies.filter(
      (movie) => !idsToRemove.includes(movie.movie_id)
    );
    return filteredMovies;
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSlidesChanges = (id) => {
    setActiveId(id);
    setMovies(movies);
  };

  return (
    movies.length > 0 && (
      <div>
        <div className="row banner">
          {movies &&
            movies.length > 0 &&
            movies.map((movie) => {
              return (
                <div className="movie" key={movie.movie_id}>
                  <img
                    src={movie.poster_path}
                    alt="Background Image"
                    className={`bgImg ${
                      movie.movie_id == activeId ? "active" : undefined
                    }`}
                  />
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-6 col-md-12">
                        <MovieContent movie={movie} activeId={activeId} />
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <MovieTrailer movie={movie} activeId={activeId} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div>
          {movies && movies.length > 0 && (
            <MovieSwiper slides={movies} slideChanges={handleSlidesChanges} />
          )}
        </div>
      </div>
    )
  );
}

export default Banner;
