import React from 'react';
import Header from '../../Shared/Header/Header';
import ellipse from "./Ellipse 76.png";
import "./Home.css";

const Home = () => {
    return (
      <div className="home__bg">
        <Header />
        <h1>This is Home Page.</h1>
        <img className=' absolute top-0 right-0 w-[356px] h-[356px]' src={ellipse} alt="" />
      </div>
    );
};

export default Home;