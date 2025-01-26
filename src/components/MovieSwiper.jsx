import React, { useRef, useEffect } from "react";
import "./movieSwiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Mousewheel,
  Pagination,
} from "swiper/modules";
import { gsap } from "gsap";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function MovieSwiper({ slides }) {
  return (
    slides.length > 0 && (
      <Swiper
        slidesPerView={"auto"}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
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
            <SwiperSlide className="swiper-slide" Key={slide.id}>
              <img src={slide.poster_path} alt="Preview Image" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    )
  );
}

export default MovieSwiper;
