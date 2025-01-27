import React, { useRef, useEffect } from "react";
import "./movieSwiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function MovieSwiper({ slides, slideChanges }) {
  return (
    slides.length > 0 && (
      <Swiper
        slidesPerView={"auto"}
        className="movieSwiper"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        modules={[Autoplay, EffectCoverflow]}
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide className="swiper-slide" key={slide.id}>
              <img
                src={slide.poster_path}
                alt="Preview Image"
                onClick={() => slideChanges(slide.movie_id)}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    )
  );
}

export default MovieSwiper;
