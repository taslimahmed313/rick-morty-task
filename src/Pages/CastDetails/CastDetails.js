import React from 'react';
import { useLoaderData } from 'react-router-dom';
import episodes from "../../assets/Cast_details/episode(s).png";
import episode_img from "../../assets/Cast_details/episodes.png";
import gender_img from "../../assets/Cast_details/gender.png";
import location_img from "../../assets/Cast_details/location.png";
import origin_img from "../../assets/Cast_details/origin.png";
import redirect_img from "../../assets/Cast_details/redirect.png";
import species_img from "../../assets/Cast_details/species.png";
import status_img from "../../assets/Cast_details/status.png";
import Header from '../Shared/Header/Header';
import "./CastDetails.css";

const CastDetails = () => {
    const cast = useLoaderData()
    console.log(cast)
    return (
      <div className="castDetails__bg">
        <Header />
        <div
          className="lg:pt-[146px] pt-10 lg:px-[100px] px-[21px]
         grid lg:grid-cols-2 lg:items-center"
        >
          <div
            className="cast__personal-info flex lg:items-center lg:justify-start 
          justify-center"
          >
            <h3 className="text-[100.35px] lg:ml-[10px] lg:mr-[56px] hidden lg:block">
              {cast.name}
            </h3>
            <div className="lg:mb-0 mb-[17px]">
              <h2
                className="lg:text-[48px] text-2xl lg:mb-[36px] mb-5 lg:w-[400px] 
              w-full text-center"
              >
                {cast.name}
              </h2>
              <div className="flex items-center">
                <div
                  className=" cast-details__bg lg:p-[50px] p-[30px] lg:w-[400px] border__regular
                   lg:mr-[175px]"
                >
                  <img
                    className="lg:w-[300px] w-[180px] lg:h-[300px] rounded-lg"
                    src={cast.image}
                    alt=""
                  />
                </div>
                <div className="border__right h-[320px] lg:block hidden"></div>
              </div>
            </div>
          </div>
          <div className="cast__details-profile lg:ml-[58px] text-white">
            <div className="grid grid-cols-3 lg:gap-10 gap-[17.4px]">
              <div
                className="cast-details__bg border__regular lg:px-8 px-[13.92px] 
              lg:py-4 py-[6.96px] rounded-lg"
              >
                <img
                  className="lg:w-12 lg:h-12 w-5 h-5"
                  src={status_img}
                  alt=""
                />
                <p className=" lg:text-xl text-[8px] pt-2">Status</p>
                <h4 className="lg:text-[40px] text-[16px]">{cast.status}</h4>
              </div>
              <div
                className="cast-details__bg border__regular lg:px-8 px-[13.92px] 
              lg:py-4 py-[6.96px] rounded-lg"
              >
                <img
                  className="lg:w-12 lg:h-12 w-5 h-5"
                  src={species_img}
                  alt=""
                />
                <p className=" lg:text-xl text-[8px] pt-2">Species</p>
                <h4 className="lg:text-[40px] text-[16px]">{cast.species}</h4>
              </div>
              <div
                className="cast-details__bg border__regular lg:px-8 px-[13.92px] 
              lg:py-4 py-[6.96px] rounded-lg"
              >
                <img
                  className="lg:w-12 lg:h-12 w-5 h-5"
                  src={gender_img}
                  alt=""
                />
                <p className=" lg:text-xl text-[8px] pt-2">Gender</p>
                <h4 className="lg:text-[40px] text-[16px]">{cast.gender}</h4>
              </div>
            </div>
            <div className="cast-details__bg border__regular lg:mt-10 mt-[15px] lg:px-8 px-[14px] lg:py-4 py-2">
              <img
                className="lg:w-12 lg:h-12 w-5 h-5"
                src={origin_img}
                alt=""
              />
              <p className=" lg:text-xl text-[8px] pt-2">Origin</p>
              <div className="flex items-center justify-between">
                <p className="lg:text-[40px] text-[16px]">{cast.origin.name}</p>
                <img
                  className="lg:w-8 lg:h-8 w-4 h-4"
                  src={redirect_img}
                  alt=""
                />
              </div>
            </div>
            <div className="cast-details__bg border__regular lg:mt-10 mt-[15px] lg:px-8 px-[14px] lg:py-4 py-2">
              <img
                className="lg:w-12 lg:h-12 w-5 h-5"
                src={location_img}
                alt=""
              />
              <p className=" lg:text-xl text-[8px] pt-2">Last Known Location</p>
              <div className="flex items-center justify-between">
                <p className="lg:text-[40px] text-[16px]">
                  {cast.location.name}
                </p>
                <img
                  className="lg:w-8 lg:h-8 w-4 h-4"
                  src={redirect_img}
                  alt=""
                />
              </div>
            </div>
            <div className="cast-details__bg border__regular lg:mt-10 mt-[19px] lg:px-8 px-[14px] lg:py-4 py-2">
              <img
                className="lg:w-12 lg:h-12 w-5 h-5"
                src={episode_img}
                alt=""
              />
              <img
                className="my-[6px] lg:w-[115px] w-[50px] lg:h-6 h-[10px]"
                src={episodes}
                alt=""
              />
              <div className="flex items-center justify-between">
                <p className="lg:text-[40px] text-[16px]">{cast.origin.name}</p>
                <img
                  className="lg:w-8 lg:h-8 w-4 h-4"
                  src={redirect_img}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CastDetails;