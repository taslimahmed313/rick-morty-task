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
        <div>
          <div className="grid lg:grid-cols-5 grid-cols-2 lg:px-[100px] px-[21px] lg:gap-[67px] gap-[33px]">
            {casts.map((cast) => (
              <div key={cast.id} className="cast__card">
                <Link to={`/cast-details/${cast.id}`}>
                  <img src={cast.image} alt="" className="" />
                  <h3>{cast.name}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Casts;