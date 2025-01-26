import React, { useState, useEffect } from "react";
import "./banner.css";
import MovieContent from "../components/MovieContent";
import MovieTrailer from "../components/MovieTrailer";
import MovieSwiper from "../components/MovieSwiper";

function Banner() {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonfakery.com/movies/infinite-scroll"
      );
      const result = await response.json();
      setMovies(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    movies.length > 0 && (
      <div className="banner">
        <div className="movie">
          <img
            src={movies[9]?.poster_path}
            alt="Background Image"
            className="bgImg active"
          />
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <MovieContent movie={movies[0]} />
              </div>
              <div className="col-lg-6 col-md-12">
                <MovieTrailer />
              </div>
            </div>
          </div>
        </div>
        {movies && movies.length > 0 && <MovieSwiper slides={movies} />}
      </div>
    )
  );
}

export default Banner;
