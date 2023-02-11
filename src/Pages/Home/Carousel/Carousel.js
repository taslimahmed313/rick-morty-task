import React from 'react';
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.css";

const Carousel = ({elements}) => {
    
    return (
      <div>
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
          //   loop={true}
        >
          {elements.map((project_info, i) => (
            <SwiperSlide key={i}>
              <div className="cast__carousel">
                <img
                  src={project_info.image}
                  alt=""
                  className="carousel__img"
                />
                <h3 className="text-xl my-4">{project_info.name}</h3>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
};

export default Carousel;