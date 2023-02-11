import React from 'react';
import bubble from "../../../assets/Home_page/bubble.png";
import ellipse from "../../../assets/Home_page/ellipse_76.png";
import portal from "../../../assets/Home_page/portal.png";
import Header from '../../Shared/Header/Header';
import "./Home.css";

const Home = () => {
    return (
      <div className="home__bg">
        <Header />
        <img
          className=" absolute top-0 right-0 w-[356px] h-[356px]"
          src={ellipse}
          alt=""
        />

        <div className="uppercase text-[128px] w-[1075px] mx-auto home__brand-name">
          <img
            className=" absolute left-[322px] top-[153px] h-[214px] w-[214px]"
            src={bubble}
            alt=""
          />
          <div className=" flex">
            <span className="text-white bold__italic">The</span>{" "}
            <img className="w-[225px] h-[145px]" src={portal} alt="" />{" "}
            <span className="text__gradient extra__bold">Rick &</span>
          </div>{" "}
          <span className="text__gradient extra__bold">MORTY</span>{" "}
          <span className="text-white bold__italic">WIKI</span>
        </div>
      </div>
    );
};

export default Home;