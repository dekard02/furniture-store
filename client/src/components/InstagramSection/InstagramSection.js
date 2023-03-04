import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { instagramData } from "./data/InstagramData";
const InstagramSection = () => {
  let slickProperty = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 7,
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
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
        },
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 7,
        },
      },
    ],
  };
  return (
    <StyledInstagram className=" section instagram-section">
      <Slider {...slickProperty}>
        {instagramData.map((item, index) => {
          return (
            <div key={item.id} className="instagram-item parent-image ">
              <div className="parent-img">
                <img src={item.img} alt="" />
              </div>
              <div className="cursor-pointer social-icon center">
                <div className="flex items-center justify-center w-12 h-12 tex leading-[0px] text-2xl transition-all bg-white rounded-full text-bgPrimary hover:text-white hover:bg-bgPrimary">
                  <i className="bi bi-instagram"></i>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </StyledInstagram>
  );
};

export default InstagramSection;
const StyledInstagram = styled.div`
  .parent-image .social-icon {
    transition: 0.4s all;
    transform: translatey(-50%) translatex(-50%) scale(0);
  }
  .parent-image:hover .social-icon {
    transform: translatey(-50%) translatex(-50%) scale(1);
  }
`;
