import React from "react";
import "./movieContent.css";
import Button from "../components/Button";

function MovieContent(movie) {
  return (
    <div className="content active">
      <img src={movie?.backdrop_path} alt="Movie Title" className="move-title" />
      <h4>
        <span>Year</span>
        <span>
          <i>age</i>
        </span>
        <span>length</span>
        <span>category</span>
      </h4>
      <p>
        {movie?.overview}
      </p>
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
