import React from "react";
import styled from "styled-components";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BannerItem from "./BannerItem";
import slide1 from "../../assets/slide1.webp";
import slide2 from "../../assets/banner2.webp";

const banners = [
  { id: 1, thumbnail: slide1 },
  { id: 2, thumbnail: slide2 },
];
const Banner = () => {
  SwiperCore.use([Autoplay]);
  return (
    <StyledBanner className="w-full home-banner">
      <Swiper
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={600}
        autoplay={{ delay: 3000 }}
      >
        {banners.map((item, index) => {
          return (
            <SwiperSlide key={item.id}>
              {({ isActive }) => (
                <BannerItem
                  item={item}
                  className={`${isActive ? "active" : ""}`}
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledBanner>
  );
};

export default Banner;
const StyledBanner = styled.div`
  position: relative;
  .slider {
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center center;
    background-size: cover;
    position: relative;
  }
  .slide__content {
    &::after {
      position: absolute;
      content: "";
      width: 5.5rem;
      height: 0.1rem;
      background: #fff;
      left: 0;
      top: 50%;
      -webkit-transform: translatey(-50%);
      transform: translatey(-50%);
    }
  }
`;
