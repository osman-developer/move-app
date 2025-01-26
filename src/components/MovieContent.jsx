import React from "react";
import "./movieContent.css";
import Button from "../components/Button";

function MovieContent({ movie, activeId }) {
  return (
    <div
      className={`content ${movie.movie_id == activeId ? "active" : undefined}`}
    >
      <h4>
        <span>{movie.original_title}</span>
      </h4>
      <p>{movie?.overview}</p>
      <div className="button">
        <Button
          icon={<ion-icon name="bookmark-outline"></ion-icon>}
          name="Book"
          color="#ff3700"
          bgColor="#ffff"
        />
        <Button
          icon={<ion-icon name="add-outline"></ion-icon>}
          name="My List"
        />
      </div>
    </div>
  );
}

export default MovieContent;
