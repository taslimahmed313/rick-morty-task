import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
      <div className="casts__bg">
        <Header />
        <div className=" lg:pb-[156px]">
          <h2 className="cast__page-title lg:mt-[110px] lg:ml-[100px] lg:mb-[45px]">
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
                        className="lg:w-[258px] w-full lg:h-[216px] h-[115px] lg:rounded rounded-sm"
                      />
                      <h3
                        className="lg:text-[16px] lg:mt-6 mt-[15px] lg:mb-[0px] mb-[6.5px] 
                  text-[10px]"
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