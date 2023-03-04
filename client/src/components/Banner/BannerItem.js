import React from "react";
import slide1 from "../../assets/slide1.webp";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const BannerItem = ({ item = {}, className = "" }) => {
  return (
    <StyledBannerItem
      className={`relative w-full home-banner-item ${className}`}
    >
      <div
        style={{
          backgroundImage: `url(${item.thumbnail})`,
        }}
        className="slider"
      >
        <div className="px-10 home-banner-slide py-[140px]">
          <div className="flex flex-col">
            <div className="pl-[100px] home-banner-heading text-white font-light text-base slide__content relative mb-3">
              Discover our best furniture collection from home
            </div>
            <h3 className="mb-4 text-4xl font-semibold text-white home-banner-header slide-title">
              Stylish Furniture
              <br />
              Bring Beauti
            </h3>
            <div className="mb-4 text-base font-light text-white home-banner-desc">
              Great furniture can bring beauty at your home, So buy our popular
              <br />
              and stylish furniture. Now you get up to 100 % discount now.
            </div>
            <div className="home-banner-btn">
              <NavLink
                to={"/products"}
                className="text-secondary hover:text-white inline-block py-2 bg-white font-semibold tracking-[0.2px] px-4 rounded-md transition-all hover:bg-bgPrimary"
              >
                Start to Buying
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </StyledBannerItem>
  );
};

export default BannerItem;
const StyledBannerItem = styled.div`
  .home-banner-header,
  .home-banner-desc,
  .home-banner-btn,
  .home-banner-heading {
    opacity: 0;
    transform: translateY(100px);
    transition: transform 1s ease, opacity 1s ease;
  }
  &.active .home-banner-header,
  &.active .home-banner-desc,
  &.active .home-banner-btn,
  &.active .home-banner-heading {
    opacity: 1;
    transform: translateY(0);
  }
  .home-banner-heading {
    transition-delay: 0.3s, 0.3s;
  }
  .home-banner-header {
    transition-delay: 0.6s, 0.6s;
  }
  .home-banner-desc {
    transition-delay: 0.9s, 0.9s;
  }
  .home-banner-btn {
    transition-delay: 1.2s, 1.2s;
  }
`;
