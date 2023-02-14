import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ellipse_bottom from "../../assets/Home_page/ellipse_75.png";
import ellipse_top from "../../assets/Home_page/ellipse_76.png";
import star from "../../assets/Home_page/home_star.png";
import Header from '../Shared/Header/Header';
import "./Casts.css";

const Casts = () => {
    const [casts, setCasts] = useState([]);

    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(data => setCasts(data.results))
    },[])
    console.log(casts)
    return (
      <div className="casts__bg lg:pb-[156px] pb-[114px] relative">
        <Header />
        <img
          className=" hidden lg:block w-[90%] rotate-180 absolute top-[600.61px] left-[80px]"
          src={star}
          alt=""
        />
        <img
          className=" absolute top-0 right-0 w-[356px] h-[356px] hidden lg:block"
          src={ellipse_top}
          alt=""
        />
        <img
          className=" absolute bottom-0 left-0 w-[356px] h-[356px] hidden lg:block"
          src={ellipse_bottom}
          alt=""
        />
        <div className=" ">
          <h2
            className="cast__page-title lg:text-[64px] text-[16px] lg:mt-[110px] mt-[62px] 
          lg:px-[100px] lg:mb-[45px] mb-7 px-[22px]"
          >
            The Cast
          </h2>
          <div
            className="grid lg:grid-cols-5 grid-cols-2 lg:px-[100px] px-[22px] lg:gap-[67px] 
          gap-x-[36.4px] gap-y-[32px] "
          >
            {casts.map(
              (cast, i) =>
                i < 15 && (
                  <div
                    key={cast.id}
                    className="cast__card w-full lg:h-[296px] lg:p-[16px] p-[8.5px]"
                  >
                    <Link to={`/cast-details/${cast.id}`}>
                      <img
                        src={cast.image}
                        alt=""
                        className="lg:w-[258px] w-full lg:h-[216px] h-[115px] lg:rounded 
                        rounded-sm"
                      />
                      <h3
                        className="lg:text-[16px] lg:mt-6 mt-[15px] lg:mb-[0px] mb-[6.5px]
                         text-white text-[10px]"
                      >
                        {cast.name}
                      </h3>
                    </Link>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    );
};

export default Casts;