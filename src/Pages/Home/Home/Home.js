import React from 'react';
import bubble from "../../../assets/Home_page/bubble.png";
import ellipse from "../../../assets/Home_page/ellipse_76.png";
import gun from "../../../assets/Home_page/gun.png";
import pill from "../../../assets/Home_page/pill.png";
import play from "../../../assets/Home_page/play_btn.png";
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
            className=" absolute left-[320px] top-[183px] h-[214px] w-[214px]"
            src={bubble}
            alt=""
          />
          <div className=" flex">
            <span className="text-white bold__italic">The</span>{" "}
            <img className="w-[225px] h-[145px]" src={portal} alt="" />{" "}
            <span className="text__gradient extra__bold">Rick &</span>
          </div>
          <img
            className=" absolute right-[505px] top-[251px] h-[10px] w-[50px]"
            src={pill}
            alt=""
          />
          <span className="text__gradient extra__bold">MORTY</span>{" "}
          <span className="text-white bold__italic">WIKI</span>
          <img
            className=" absolute right-[256px] top-[311px] h-[332px] w-[319px]"
            src={gun}
            alt=""
          />
        </div>
        <div className='flex gap-[64px] justify-center'>
          <button className="play__btn demi__bold">
            {" "}
            <img src={play} alt="" /> Watch Now
          </button>
          <p className="demi__bold text-[14px] w-[364px]">
            Brilliant but boozy scientist Rick hijacks his fretful teenage
            grandson, Morty, for wild escapades in other worlds and alternate
            dimensions.
          </p>
        </div>
      </div>
    );
};

export default Home;