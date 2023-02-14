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
          slidesPerView={1.2}
          breakpoints={{
            300: {
              slidesPerView: 2.3,
              spaceBetween: 14.81,
            },
            768: {
              slidesPerView: 5.35,
              spaceBetween: 32,
            },
          }}
        >
          {casts.map((cast, i) => (
            <SwiperSlide key={i}>
              <div className="cast__carousel">
                <img
                  src={cast.image}
                  alt=""
                  className="lg:w-[258px] w-full lg:h-[216px] h-[115px] lg:rounded 
                        rounded-sm"
                />
                <h3
                  className="lg:text-[16px] lg:py-6 py-[15px]
                         text-white text-[10px]"
                >
                  {cast.name}
                </h3>
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
          slidesPerView={1.2}
          breakpoints={{
            300: {
              slidesPerView: 2.3,
              spaceBetween: 14.81,
            },
            768: {
              slidesPerView: 4.35,
              spaceBetween: 32,
            },
          }}
        >
          {episodes.map((episode, i) => (
            <SwiperSlide key={i}>
              <div className="common__carousel lg:w-[] lg:py-5 py-2 lg:px-6 px-[10px] text-white">
                <h4 className=" h_4_weight lg:text-base text-[10px]">
                  {episode.episode}
                </h4>
                <h3 className="h_3_weight lg:text-6 text-[16px]">
                  {episode.name}
                </h3>
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
          slidesPerView={1.2}
          breakpoints={{
            300: {
              slidesPerView: 2.3,
              spaceBetween: 14.81,
            },
            768: {
              slidesPerView: 4.35,
              spaceBetween: 32,
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