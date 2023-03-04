import { css } from "styled-components";
export const GlobalClasses = css`
  .wrapper-layout {
    max-width: 1200px;
    margin: auto;
  }
  .section {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .section-title {
    font-size: 30px;
    margin-bottom: 25px;
    font-weight: 600;
    color: #121a25;
    text-align: center;
  }
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .parent-image {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    .parent-img {
      overflow: hidden;
    }
    .parent-img img {
      transition: 0.4s all;
    }
    &:hover .parent-img img {
      transform: scale(1.1);
    }
  }
  .slick-slider {
    margin: 0 -14px;
  }
  .slick-list {
    & .slick-slide {
      padding: 0 14px;
    }
  }
  .slick-dots {
    bottom: -40px;
  }
  .slick-dots li button:before {
    color: #415a77;
    font-size: 18px;
  }
  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    color: #f51c1c;
    opacity: 1;
  }
  .slick-dots li.slick-active button:before {
    color: #f51c1c;
    opacity: 1;
  }
  .tippy-box {
    font-size: 11px;
  }
  .tippy-content {
    padding-top: 2px;
    padding-bottom: 2px;
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swal2-container.swal2-top,
  .swal2-container.swal2-center,
  .swal2-container.swal2-bottom {
    z-index: 9999;
  }
  .btn-increase,
  .btn-decrease {
    line-height: 0;
    font-weight: 300;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid rgb(228, 228, 228);
    cursor: pointer;
    text-align: center;
    width: 40px;
    height: 40px;
    transition: all 0.4s ease-in-out 0s;
    background-color: #f5f5f5;
  }
  .cart-quantity {
    font-weight: 300;
    border-top: 1px solid rgb(228, 228, 228);
    border-bottom: 1px solid rgb(228, 228, 228);
    text-align: center;
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
  }
  .swal2-container.swal2-center > .swal2-popup {
    user-select: none;
  }
  .has-scrollbar {
    will-change: scroll-position;
    scroll-behavior: smooth;
    overflow: hidden overlay;
    &::-webkit-scrollbar {
      width: 4px;
      display: none;
    }
    &:hover::-webkit-scrollbar {
      width: 4px;
      display: inline-block;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 12px;
      background: #b7b7a4;
    }
  }
`;
