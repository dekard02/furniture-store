import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialData } from "../../components/Testimonial/data/testimonialData";
import styled from "styled-components";
const TopClints = ({ slideToShow = 2, className = "" }) => {
  let slickProperty = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: slideToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slideToShow,
        },
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: slideToShow,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: slideToShow,
        },
      },
    ],
  };
  return (
    <div className="relative">
      <Slider {...slickProperty}>
        {testimonialData.map((item, index) => (
          <div
            key={item.id}
            className={`relative testimonial-item ${className}`}
          >
            <div className="flex items-center gap-x-3">
              <img className="w-12 h-12 rounded-full" src={item.img} alt="" />
              <div className="flex flex-col ">
                <span className="text-secondary leading-[18px] text-lg font-medium">
                  {item.name}
                </span>
                <span className="text-sm italic font-light text-gray-400">
                  {item.job}
                </span>
                <div className="flex gap-x-1">
                  <i className="text-xs text-yellow-500 bi bi-star-fill"></i>
                  <i className="text-xs text-yellow-500 bi bi-star-fill"></i>
                  <i className="text-xs text-yellow-500 bi bi-star-fill"></i>
                  <i className="text-xs text-yellow-500 bi bi-star-fill"></i>
                  <i className="text-xs text-yellow-500 bi bi-star-fill"></i>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <svg
                className="text-gray-400 testimonial__icon--svg"
                data-name="Group 546"
                xmlns="http://www.w3.org/2000/svg"
                width="21.479"
                height="18.939"
                viewBox="0 0 21.479 18.939"
              >
                <path
                  data-name="Path 131"
                  d="M8.629,11.089A1.033,1.033,0,0,0,9.149,9.7L8.3,7.918a1.036,1.036,0,0,0-1.352-.5A11.937,11.937,0,0,0,3.206,9.841,9.053,9.053,0,0,0,.693,13.809,21.762,21.762,0,0,0,0,19.908v5.319a1.043,1.043,0,0,0,1.04,1.04h6.81a1.043,1.043,0,0,0,1.04-1.04v-6.81a1.043,1.043,0,0,0-1.04-1.04H4.592A7.306,7.306,0,0,1,5.8,13.168,6.586,6.586,0,0,1,8.629,11.089Z"
                  transform="translate(0 -7.328)"
                  fill="currentColor"
                />
                <path
                  data-name="Path 132"
                  d="M79.312,11.172a1.033,1.033,0,0,0,.52-1.386l-.849-1.767a1.036,1.036,0,0,0-1.352-.5,12.552,12.552,0,0,0-3.725,2.408,9.248,9.248,0,0,0-2.53,3.985,21.47,21.47,0,0,0-.676,6.082v5.319a1.043,1.043,0,0,0,1.04,1.04h6.81a1.043,1.043,0,0,0,1.04-1.04V18.5a1.043,1.043,0,0,0-1.04-1.04H75.274a7.307,7.307,0,0,1,1.213-4.211A6.585,6.585,0,0,1,79.312,11.172Z"
                  transform="translate(-58.45 -7.411)"
                  fill="currentColor"
                />
              </svg>
              <span className="text-sm text-gray-400 select-none">
                Mum ut perspiciatis unde omnis iste natus ganu error sit
                voluptatem accusan tium gyauey aykua doloremque sdggsuj
                jjsiaalji aialadju auoa.
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopClints;
