import React from "react";
import ButtonPlay from "../../components/BannerVideo/ButtonPlay/ButtonPlay";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import img from "../../assets/aboutbg.webp";
import team1 from "../../assets/team1.webp";
import team2 from "../../assets/team2.webp";
import team3 from "../../assets/team3.webp";
import team4 from "../../assets/team4.webp";
import styled from "styled-components";
import TopClints from "../../components/TopClints/TopClints";
import NewsLetter from "../../components/layout/DefaultLayout/NewsLetter/NewsLetter";
import SocialIcon from "./SocialIcon";
const data = [
  {
    id: 1,
    url: team1,
    name: "Sarrison Samuel",
    job: "CEO - Founder",
  },
  {
    id: 2,
    url: team2,
    name: "Warrison Samuel",
    job: "Spa Manager",
  },
  {
    id: 3,
    url: team3,
    name: "Harrison Samuel",
    job: "Products Manager",
  },
  {
    id: 4,
    url: team4,
    name: "Milton Marsh",
    job: "Products Manager",
  },
];
const About = () => {
  return (
    <StyledAbout className="about-page">
      <BreadCrumb heading="About Us" title="Home - About Us" />
      <div className="section wrapper-layout">
        <div className="grid grid-cols-2 gap-x-7">
          <div className="grid grid-cols-2 gap-x-4">
            <div className="mt-12 rounded-md">
              <img
                className="rounded-md"
                src="https://risingtheme.com/html/demo-furea/furea/assets/img/other/about-thumb-list1.webp"
                alt=""
              />
            </div>
            <div className="relative">
              <div className="relative rounded-md">
                <img
                  className="rounded-md"
                  src="https://risingtheme.com/html/demo-furea/furea/assets/img/other/about-thumb-list2.webp"
                  alt=""
                />
                <div className="absolute -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4">
                  <ButtonPlay />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h3 className="text-2xl font-medium text-bgPrimary">
              {" "}
              Why Choose us
            </h3>
            <h3 className="text-3xl font-bold text-secondary">
              We do not buy from the open market & traders.
            </h3>
            <span className="text-base font-normal text-textPrimary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              illo, est repellendus are quia voluptate neque reiciendis ea
              placeat labore maiores cum, hic ducimus ad a dolorem soluta co
              nsectetur adipisci. Perspiciatis quas ab quibusdam is.
            </span>
            <span className="text-base font-normal text-textPrimary">
              Itaque accusantium eveniet a laboriosam dolorem? Magni suscipit
              est corrupti explicabo non perspiciatis, excepturi ut asperiores
              assumenda rerum? Provident ab corrupti sequi, voluptates
              repudiandae eius odit aut.
            </span>
            <div className="flex items-center gap-x-3">
              <div className="flex flex-col ">
                <h2 className="text-xl font-medium text-secondary">
                  Bruce Sutton
                </h2>
                <span className="text-base text-secondary">Spa Manager</span>
              </div>
              <div className="relative">
                <img
                  className="w-16"
                  src="https://risingtheme.com/html/demo-furea/furea/assets/img/icon/signature.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative bg-about"
        style={{
          backgroundImage: `url(https://risingtheme.com/html/demo-furea/furea/assets/img/banner/banner-bg4.webp)`,
        }}
      >
        <div className="wrapper-layout ">
          <div className="relative z-50 grid grid-cols-4 gap-x-5 py-28">
            <div className="flex flex-col items-center justify-center gap-y-5">
              <span className="flex flex-col text-xl font-semibold text-center text-white gap-y-4">
                YEARS OF <br /> FOUNDATION{" "}
              </span>
              <span className="text-5xl font-bold text-white">50</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-5">
              <span className="flex flex-col text-xl font-semibold text-center text-white gap-y-4">
                SKILLED TEAM
                <br /> MEMBERS{" "}
              </span>
              <span className="text-5xl font-bold text-white">100</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-5">
              <span className="flex flex-col text-xl font-semibold text-center text-white gap-y-4">
                HAPPY
                <br /> CUSTOMERS{" "}
              </span>
              <span className="text-5xl font-bold text-white">80</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-5">
              <span className="flex flex-col text-xl font-semibold text-center text-white gap-y-4">
                MONTHLY
                <br /> ORDERS{" "}
              </span>
              <span className="text-5xl font-bold text-white">70</span>
            </div>
          </div>
        </div>
      </div>
      <div className="section wrapper-layout">
        <h3 style={{ fontSize: "40px" }} className="section-title">
          Our Team
        </h3>
        <div className="grid grid-cols-4 gap-x-7">
          {data.map((item) => {
            return (
              <div key={item.id} className="relative our-item">
                <div className="flex flex-col gap-y-4">
                  <div className="relative transition-all rounded-full hover:border-3 our-img hover:border-bgPrimary">
                    <img className="rounded-full" src={item.url} alt="" />
                  </div>
                  <div className="flex flex-col items-center mt-2 gap-y-2">
                    <h3 className="text-2xl font-semibold text-secondary">
                      {" "}
                      {item.name}
                    </h3>
                    <span className="text-lg text-textPrimary">{item.job}</span>
                    <SocialIcon></SocialIcon>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="top-clints py-[90px] bg-[#f6f6f6] relative">
        <img
          className="absolute top-0 left-0"
          src="https://risingtheme.com/html/demo-furea/furea/assets/img/other/testimonial-shape.webp"
          alt=""
        />
        <img
          className="absolute top-0 right-0"
          src="https://risingtheme.com/html/demo-furea/furea/assets/img/other/testimonial-shape2.webp"
          alt=""
        />
        <div className="wrapper-layout">
          <h3 className="section-title">What Say Our Top Clints</h3>
          <TopClints
            className="p-4 rounded-md top-clint-item"
            slideToShow={3}
          />
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
const StyledAbout = styled.div`
  .bg-about {
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center center;
    background-size: cover;
    position: relative;
    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background: #000;
      left: 0;
      top: 0;
      opacity: 0.7;
    }
  }
  .our-item {
    &:hover .our-img {
      border: 4px solid #f51c1c;
    }
  }
  .top-clint-item {
    background-color: #fff;
    -webkit-box-shadow: 0 6px 12px rgb(52 52 52 / 10%);
    box-shadow: 0 6px 12px rgb(52 52 52 / 10%);
  }
`;
