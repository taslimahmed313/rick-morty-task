import React from 'react';
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.css";

const Carousel = ({ casts, episodes, locations }) => {
  return (
    <div>
      {casts && (
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
          slidesPerview={1.2}
          spaceBetween={6}
          breakpoints={{
            768: {
              slidesPerView: 5.35,
            },
          }}
        >
          {casts.map((cast, i) => (
            <SwiperSlide key={i}>
              <div className="cast__carousel">
                <img src={cast.image} alt="" className="carousel__img" />
                <h3>{cast.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {episodes && (
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
          slidesPerview={1.2}
          spaceBetween={6}
          breakpoints={{
            768: {
              slidesPerView: 4.35,
            },
          }}
        >
          {episodes.map((episode, i) => (
            <SwiperSlide key={i}>
              <div className="common__carousel">
                <h4>{episode.episode}</h4>
                <h3>{episode.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {locations && (
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
          slidesPerview={1.2}
          spaceBetween={6}
          breakpoints={{
            768: {
              slidesPerView: 4.35,
            },
          }}
        >
          {locations.map((location, i) => (
            <SwiperSlide key={i}>
              <div className="common__carousel">
                <h4># {location.id}</h4>
                <h3>{location.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Carousel;