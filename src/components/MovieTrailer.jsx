import React from "react";
import "./movieTrailer.css";

function MovieTrailer() {
  return (
    <div>
      <div className="date active">
        <h2>15th of aug</h2>
      </div>
      <div className="trailer d-flex align-items-center justify-content-center active">
        <a href="#" className="playBtn">
          <ion-icon name="play-outline"></ion-icon>
        </a>
        <p>Watch Trailer</p>
      </div>
    </div>
  );
}

export default MovieTrailer;
