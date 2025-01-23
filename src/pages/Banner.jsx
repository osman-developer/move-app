import React, { useState, useEffect } from "react";
import "./banner.css";

function Banner() {
  const [movies, setMovies] = useState([]);

  const fetchData = () => {
    fetch("https://jsonfakery.com/movies/infinite-scroll")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="banner">
      <div className="movie">
        <img src="" alt="Background Image" className="bgImg" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="content">
                <img src="" alt="Movie Title" className="move-title" />
                <h4>
                  <span>Year</span>
                  <span>
                    <i>age</i>
                  </span>
                  <span>length</span>
                  <span>category</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat cumque repellendus, quo labore nulla dicta dolores
                  velit aspernatur neque iusto! Provident quam reiciendis quo
                  cumque. Sapiente debitis beatae velit non est odit repellat
                  repudiandae delectus eius tempore, iusto quaerat error numquam
                  nobis. Dolorum sint minus, cum nostrum unde temporibus aut.
                </p>
                <div className="button">button</div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
