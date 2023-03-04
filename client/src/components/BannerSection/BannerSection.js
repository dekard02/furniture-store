import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.webp";
import img4 from "../../assets/img4.webp";
import img5 from "../../assets/img5.webp";
const BannerSection = () => {
  return (
    <StyledBannerSection className="section ">
      <div className="flex flex-col gap-y-5">
        <div className="grid grid-cols-2 gap-x-7">
          <NavLink
            to={"/products"}
            className="banner-item cursor-pointer overflow-hidden relative"
          >
            <img src={img1} alt="" />
            <div className="absolute transition-all hover:text-bgPrimary pb-[6px] title text-secondary text-xl font-medium z-30">
              White Minimalist <br />
              Combo Sofa
            </div>
          </NavLink>
          <NavLink
            to={"/products"}
            className="banner-item cursor-pointer overflow-hidden relative"
          >
            <img src={img2} alt="" />
            <div className="absolute title2 transition-all hover:text-bgPrimary pb-[6px] title text-secondary text-xl font-medium z-30">
              Modern Stylish <br />
              Single Sofa
            </div>
          </NavLink>
        </div>
        <div className="grid grid-cols-2 gap-x-7">
          <NavLink
            to={"/products"}
            className="banner-item cursor-pointer overflow-hidden relative"
          >
            <img src={img3} alt="" />
            <div className="absolute title3 transition-all hover:text-bgPrimary pb-[6px] title text-secondary text-xl font-medium z-30">
              Larger Minimal <br />
              Wooden Chair
            </div>
          </NavLink>
          <div className="flex flex-col gap-y-5">
            <NavLink
              to={"/products"}
              className="banner-item cursor-pointer overflow-hidden relative"
            >
              <img src={img4} alt="" />
              <div className="absolute title4 transition-all hover:text-bgPrimary pb-[6px] title text-secondary text-xl font-medium z-30">
                Family Package <br />
                Sofa Set
              </div>
            </NavLink>
            <NavLink
              to={"/products"}
              className="banner-item cursor-pointer overflow-hidden relative"
            >
              <img src={img5} alt="" />
              <div className="absolute title5 transition-all hover:text-bgPrimary pb-[6px] title text-secondary text-xl font-medium z-30">
                White Minimalist <br />
                Combo Sofa
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </StyledBannerSection>
  );
};

export default BannerSection;
const StyledBannerSection = styled.div`
  .banner-item {
    transition: 0.5s all;
    img {
      transition: 0.5s all;
    }
    .title {
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
      border-bottom: 3px solid #f51c1c;
      left: 70%;
    }
    .title2 {
      left: 30%;
    }
    .title3 {
      left: 20%;
      top: 18%;
    }
    .title4 {
      left: 50%;
      top: 20%;
    }
    .title5 {
      left: 70%;
      top: 50%;
    }
    &:hover img {
      transform: scale(1.1);
    }
  }
`;
