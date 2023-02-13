import React from 'react';
import { useLoaderData } from 'react-router-dom';
import origin_img from "../../assets/Cast_details/origin.png";
import redirect_img from "../../assets/Cast_details/redirect.png";
import status_img from "../../assets/Cast_details/status.png";
import Header from '../Shared/Header/Header';
import "./CastDetails.css";

const CastDetails = () => {
    const cast = useLoaderData()
    console.log(cast)
    return (
      <div className="castDetails__bg">
        <Header />
        <div className="lg:pt-[146px] lg:px-[100px] grid lg:grid-cols-2 lg:items-center">
          <div className="cast__personal-info flex lg:items-center">
            <h3 className="text-[100.35px] lg:ml-[10px] lg:mr-[56px] hidden lg:block">
              {cast.name}
            </h3>
            <div>
              <h2 className="lg:text-[48px] lg:mb-[36px] lg:w-[400px] w-full text-center">
                {cast.name}
              </h2>
              <div className="flex items-center">
                <div
                  className=" cast-details__bg lg:p-[50px] lg:w-[400px] w-full border
                   border-teal-500 lg:mr-[175px]"
                >
                  <img
                    className="lg:w-[300px] w-full lg:h-[300px] rounded-lg"
                    src={cast.image}
                    alt=""
                  />
                </div>
                <div className="border-r border-red-500 h-[320px] lg:block hidden"></div>
              </div>
            </div>
          </div>
          <div className="cast__details-profile lg:ml-[58px]">
            <div className="status_species_gender grid grid-cols-3 lg:gap-10">
              <div className="cast-details__bg border border-teal-300 lg:px-8 lg:py-4 rounded-lg">
                <img src={status_img} alt="" />
                <p className=' text-xl lg:pt-2'>Status</p>
                <h4 className='text-[40px]'>{cast.status}</h4>
              </div>
              <div className="cast-details__bg border border-teal-300 lg:px-8 lg:py-4">
                <img src={status_img} alt="" />
                <h4>Status</h4>
                <p>{cast.status}</p>
              </div>
              <div className="cast-details__bg border border-teal-300 lg:px-8 lg:py-4">
                <img src={status_img} alt="" />
                <h4>Status</h4>
                <p>{cast.status}</p>
              </div>
            </div>
            <div className="cast-details__bg border border-teal-300 mt-10 lg:px-8 lg:py-4">
              <img src={origin_img} alt="" />
              <h4>Origin</h4>
              <div className="flex items-center justify-between">
                <p>{cast.origin.name}</p>
                <img src={redirect_img} alt="" />
              </div>
            </div>
            <div className="cast-details__bg border border-teal-300 mt-10 lg:px-8 lg:py-4">
              <img src={origin_img} alt="" />
              <h4>Origin</h4>
              <div className="flex items-center justify-between">
                <p>{cast.origin.name}</p>
                <img src={redirect_img} alt="" />
              </div>
            </div>
            <div className="cast-details__bg border h-[400px] border-teal-300 mt-10 lg:px-8 lg:py-4">
              <img src={origin_img} alt="" />
              <h4>Origin</h4>
              <div className="flex items-center justify-between">
                <p>{cast.origin.name}</p>
                <img src={redirect_img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CastDetails;