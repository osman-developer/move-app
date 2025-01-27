import React from "react";
import "./movieTrailer.css";

function MovieTrailer({movie,activeId}) {
  return (
    <div>
      <div className={`date ${movie.movie_id == activeId ? "active" : undefined}`}>
        <h2>{movie.release_date}</h2>
      </div>
    </div>
  );
}

export default MovieTrailer;
