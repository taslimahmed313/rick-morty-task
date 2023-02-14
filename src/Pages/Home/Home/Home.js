import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ellipse_bottom from "../../../assets/Home_page/ellipse_75.png";
import ellipse_top from "../../../assets/Home_page/ellipse_76.png";
import spiral from "../../../assets/Home_page/home_spiral.png";
import star from "../../../assets/Home_page/home_star.png";

import Header from '../../Shared/Header/Header';
import Carousel from '../Carousel/Carousel';
import Hero from '../Hero/Hero';
import "./Home.css";

const Home = () => {

  const [casts, setCasts] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCasts(data.results));
  },[])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((res) => res.json())
      .then((data) => setEpisodes(data.results));
  }, []);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((res) => res.json())
      .then((data) => setLocations(data.results));
  }, []);

  console.log(episodes)


    return (
      <div>
        <div className="home__bg lg:pb-[80px] pb-[45px] lg:mx-0 px-[21px]">
          <Header />
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

          <Hero />

          <div className="lg:px-[100px] lg:mt-[93px] mt-[55px]">
            <div className="flex justify-between items-center lg:pb-[28px] pb-[17px]">
              <p className="lg:text-2xl text-base text-white">Meet the cast</p>
              <Link
                to="/casts"
                className="view__btn lg:py-[10px] py-[6px] lg:px-[24px] px-[16px]
               rounded-lg text-white lg:text-[18px] text-[8px] "
              >
                View All
              </Link>
            </div>
            <Carousel casts={casts} />
          </div>
          <div className="">
            <img
              className="hidden lg:block absolute top-[1086px] right-0"
              src={spiral}
              alt=""
            />
            <img
              className=" hidden lg:block absolute bottom-[257.61px] left-[80px]"
              src={star}
              alt=""
            />
            <div className="lg:px-[100px] lg:pt-[107px] pt-8">
              <p className=" lg:text-xl text-base text-white lg:pb-7 pb-[21px]">
                Episodes
              </p>
              <Carousel episodes={episodes} />
            </div>
            <div className="lg:px-[100px] lg:pt-[107px] pt-8">
              <p className=" lg:text-xl text-base text-white lg:pb-7 pb-[21px]">
                Locations
              </p>
              <Carousel locations={locations} />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;