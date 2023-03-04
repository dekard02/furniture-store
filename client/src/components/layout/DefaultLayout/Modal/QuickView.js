import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

import { useDispatch, useSelector } from "react-redux";
import ProductDetailItem from "../../../ProductDetailItem/ProductDetailItem";
import { setCloseModalQuickView } from "../../../../redux-toolkit/global/globalSlice";
const QuickView = ({ item = {} }) => {
  const [selectedItem, setSelectedItem] = useState({});
  useEffect(() => {
    if (!item) {
      return null;
    } else {
      setSelectedItem(item);
    }
  }, [item]);
  const dispatch = useDispatch();
  const { showModalQuickView } = useSelector((state) => state.global);
  const handleCloseModalQuickView = () => {
    dispatch(setCloseModalQuickView());
  };

  if (typeof document === "undefined")
    return <div className="modal-quickview"></div>;
  return ReactDOM.createPortal(
    <StyledQuickView
      className={`modal-quickview ${
        showModalQuickView ? "" : "close-modal-quickview"
      } `}
    >
      <div
        onClick={handleCloseModalQuickView}
        className="absolute inset-0 z-20 bg-black opacity-60 overlay "
      ></div>
      <div className="w-[1000px]  bg-white rounded-[8px] overflow-hidden h-[600px]  relative z-50 max-h-full inset-0 m-auto modal-quickview p-4">
        <ProductDetailItem item={selectedItem} isQickView />
        <button
          onClick={handleCloseModalQuickView}
          className="absolute text-lg hover:text-bgPrimary p-3 z-[300] text-secondary close-modal-quickview top-4 right-4 "
        >
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
    </StyledQuickView>,
    document.querySelector("body")
  );
};

export default QuickView;
const StyledQuickView = styled.div`
  width: 100%;
  height: 100%;
  inset: 0;
  position: fixed;
  z-index: 999;
  display: flex;
  &.close-modal-quickview {
    display: none;
  }
  @keyframes fadeIn {
    0% {
      transform: translateY(-100px);
    }
    100% {
      transform: translateY(0);
    }
  }
  & .modal-quickview {
    will-change: scroll-position;
    scroll-behavior: smooth;
    overflow: hidden overlay;
    animation: fadeIn ease 0.5s;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &:hover::-webkit-scrollbar {
      width: 6px;
      display: inline-block;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 12px;
      background: #ccc;
    }
  }
`;
