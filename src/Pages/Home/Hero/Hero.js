import React from 'react';
import bubble from "../../../assets/Home_page/bubble.png";
import gun from "../../../assets/Home_page/gun.png";
import pill from "../../../assets/Home_page/pill.png";
import play from "../../../assets/Home_page/play_btn.png";
import portal from "../../../assets/Home_page/portal.png";
import "./Hero.css";

const Hero = () => {
    return (
      <div>
        <div
          className="home__brand-name uppercase lg:text-[128px] text-[40px] lg:w-[1075px]
       w-full mx-auto"
        >
          <img
            className=" absolute lg:left-[365px] lg:top-[182px] lg:h-[214.6px] lg:w-[214.6px] 
          -rotate-6 w-[52.43px] h-[52.43px] left-[3px] top-[70px]"
            src={bubble}
            alt=""
          />
          <div className=" flex justify-center">
            <span className="text-white bold__italic">The</span>{" "}
            <img
              className="lg:w-[225px] lg:h-[145px] w-[68.62px] h-[44.22px]"
              src={portal}
              alt=""
            />{" "}
            <span className="text__gradient extra__bold">Rick &</span>
          </div>
          <img
            className=" absolute right-[454px] top-[251px] h-[10px] w-[50px] hidden lg:block"
            src={pill}
            alt=""
          />
          <span className="text__gradient extra__bold">MORTY</span>{" "}
          <span className="text-white bold__italic">WIKI</span>
          <img
            className=" absolute lg:right-[256px] lg:top-[311px] top-[182px]
             right-[0px] lg:h-[331.98px] lg:w-[318.91px] w-[119px] h[124px]"
            src={gun}
            alt=""
          />
        </div>
        <div
          className="flex lg:gap-[64px] lg:justify-center lg:items-center lg:flex-row 
        flex-col-reverse lg:mt-0 mt-5"
        >
          <a
            href="https://youtu.be/KQ9Cgdsa9tc"
            className="play__btn flex items-center lg:gap-[10px] gap-[6px] demi__bold lg:mt-0 mt-8 
            lg:py-[17px] lg:px-[25px] py-[10px] px-[15px] lg:w-[203px] 
            lg:h-[58px] w-[125px] h-[35px] "
            target="_blank"
            rel="noreferrer"
          >
            <img className='lg:w-[24px] lg:h-[24px] w-[14.82px] h-[14.82px]' src={play} alt="" />
            <span className="lg:text-[20px] text-[12px]">Watch Now</span>
          </a>
          <p className="demi__bold lg:text-[14px] text-[10px] lg:w-[364px] w-[260px]">
            Brilliant but boozy scientist Rick hijacks his fretful teenage
            grandson, Morty, for wild escapades in other worlds and alternate
            dimensions.
          </p>
        </div>
      </div>
    );
};

export default Hero;