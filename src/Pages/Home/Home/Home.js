import React, { useEffect, useState } from 'react';
import bubble from "../../../assets/Home_page/bubble.png";
import ellipse from "../../../assets/Home_page/ellipse_76.png";
import gun from "../../../assets/Home_page/gun.png";
import spiral from "../../../assets/Home_page/home_spiral.png";
import star from "../../../assets/Home_page/home_star.png";
import pill from "../../../assets/Home_page/pill.png";
import play from "../../../assets/Home_page/play_btn.png";
import portal from "../../../assets/Home_page/portal.png";
import Header from '../../Shared/Header/Header';
import Carousel from '../Carousel/Carousel';
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
    fetch("https://rickandmortyapi.com/api/episode")
      .then((res) => res.json())
      .then((data) => setLocations(data.results));
  }, []);

  console.log(episodes)


    return (
      <div>
        <div className="home__bg">
          <Header />
          <img
            className=" absolute top-0 right-0 w-[356px] h-[356px] hidden lg:block"
            src={ellipse}
            alt=""
          />

          <div className="uppercase lg:text-[128px] text-[40px] lg:w-[1075px] w-full mx-auto home__brand-name">
            <img
              className=" absolute left-[320px] top-[183px] lg:h-[214px] lg:w-[214px] w-[52.43px] h-[52.43px]"
              src={bubble}
              alt=""
            />
            <div className=" flex">
              <span className="text-white bold__italic">The</span>{" "}
              <img
                className="lg:w-[225px] lg:h-[145px] w-[68.62px] h-[44.22px]"
                src={portal}
                alt=""
              />{" "}
              <span className="text__gradient extra__bold">Rick &</span>
            </div>
            <img
              className=" absolute right-[505px] top-[251px] h-[10px] w-[50px] hidden lg:block"
              src={pill}
              alt=""
            />
            <span className="text__gradient extra__bold">MORTY</span>{" "}
            <span className="text-white bold__italic">WIKI</span>
            <img
              className=" absolute right-[256px] top-[311px] lg:h-[332px] lg:w-[319px] w-[119px] h[124px]"
              src={gun}
              alt=""
            />
          </div>
          <div className="flex lg:gap-[64px] lg:justify-center lg:items-center lg:flex-row flex-col-reverse">
            <a
              href="https://youtu.be/KQ9Cgdsa9tc"
              className="play__btn demi__bold"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={play} alt="" /> Watch Now
            </a>
            <p className="demi__bold text-[14px] w-[364px]">
              Brilliant but boozy scientist Rick hijacks his fretful teenage
              grandson, Morty, for wild escapades in other worlds and alternate
              dimensions.
            </p>
          </div>
          <div className="home__cast">
            <div className="cast__text">
              <p>Meet the cast</p>
              <button className="view__btn">View All</button>
            </div>
            <Carousel casts={casts} />
          </div>
          <div className="">
            <img className="hidden lg:block absolute top-[1050px] right-0" src={spiral} alt="" />
            <img
              className=" hidden lg:block absolute bottom-[250px] left-[80px]"
              src={star}
              alt=""
            />
            <div className="home__common__section">
              <p>Episodes</p>
              <Carousel episodes={episodes} />
            </div>
            <div className="home__common__section">
              <p>Episodes</p>
              <Carousel locations={locations} />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;