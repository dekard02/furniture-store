import React, { Fragment } from "react";
import styled from "styled-components";
import bannerVideo from "../../assets/bannervideo.webp";
import VideoModal from "../layout/DefaultLayout/video/VideoModal";
import { useDispatch, useSelector } from "react-redux";
import {
  HeadPhoneIcon,
  MoneyIcon,
  SecureIcon,
  Shipping,
} from "./icons/IconShipping";
import ButtonPlay from "./ButtonPlay/ButtonPlay";
const BannerVideo = () => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <StyledBannerVideo className="section">
        <div className="relative overflow-hidden rounded-lg">
          <img className="rounded-lg" src={bannerVideo} alt="" />
          <div className="center">
            <ButtonPlay />
          </div>
        </div>
        <div className="max-w-[750px] grid grid-cols-4 gap-x-4 justify-center section-shipping mx-auto bg-white rounded-lg px-10 py-8">
          <div className="relative flex flex-col items-center shipping-item gap-y-4">
            <div className="relative icon-ship">
              <HeadPhoneIcon />
            </div>
            <h3 className="text-lg font-medium text-secondary">24/7 Support</h3>
          </div>
          <div className="relative flex flex-col items-center shipping-item gap-y-4">
            <div className="relative icon-ship">
              <SecureIcon />
            </div>
            <h3 className="text-lg font-medium text-secondary">
              Secure Shopping
            </h3>
          </div>
          <div className="relative flex flex-col items-center shipping-item gap-y-4">
            <div className="relative icon-ship">
              <Shipping />
            </div>
            <h3 className="text-lg font-medium text-secondary">
              Free Shipping
            </h3>
          </div>
          <div className="relative flex flex-col items-center shipping-item gap-y-4">
            <div className="relative icon-ship">
              <MoneyIcon />
            </div>
            <h3 className="text-lg font-medium text-secondary">Money Return</h3>
          </div>
        </div>
      </StyledBannerVideo>
      <VideoModal />
    </Fragment>
  );
};

export default BannerVideo;
const StyledBannerVideo = styled.div`
  position: relative;

  .section-shipping {
    -webkit-box-shadow: 0 8px 18px rgb(70 70 70 / 16%);
    box-shadow: 0 8px 18px rgb(70 70 70 / 16%);
  }

  .shipping-item::after {
    position: absolute;
    content: "";
    width: 65px;
    height: 1px;
    border: 1px dashed #f51c1c;
    right: -38px;
    top: 20px;
    opacity: 0.6;
  }
  .section-shipping {
    position: absolute;
    top: 92%;
    z-index: 100;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 750px;
  }
  .shipping-item:last-child::after {
    position: initial;
    content: initial;
    width: 0;
    height: 0;
    border: 0;
    right: initial;
    top: initial;
    opacity: 0.6;
  }
`;
