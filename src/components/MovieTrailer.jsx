import React from "react";
import "./movieTrailer.css";

function MovieTrailer({movie,activeId}) {
  return (
    <div>
      <div className={`date ${movie.movie_id == activeId ? "active" : undefined}`}>
        <h2>{movie.release_date}</h2>
      </div>
      <div className="trailer d-flex align-items-center justify-content-center">
        <a href="#" className="playBtn">
          <ion-icon name="play-outline"></ion-icon>
        </a>
        <p>Watch Trailer</p>
      </div>
    </div>
  );
}

export default MovieTrailer;
