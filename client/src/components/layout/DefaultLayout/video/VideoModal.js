import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import ReactPlayer from "react-player/youtube";
import { useDispatch, useSelector } from "react-redux";
import { setPlayVideo } from "../../../../store/global/globalSlice";
const VideoModal = () => {
  const { playVideo } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  if (typeof document === "undefined")
    return <div className="modal-video"></div>;
  return ReactDOM.createPortal(
    <StyledVideo className={`modal-video ${playVideo ? "" : "close-modal"}`}>
      <div
        onClick={() => dispatch(setPlayVideo(false))}
        className="modal-overlay"
      ></div>
      <div
        onClick={() => dispatch(setPlayVideo(false))}
        className="close-btn text-white text-xl cursor-pointer p-2 absolute z-[100] top-5 right-5"
      >
        <i className="transition-all bi hover:text-bgPrimary bi-x-lg"></i>
      </div>
      <div className="modal-content">
        <div className="relative">
          <ReactPlayer
            width={"800px"}
            height={"500px"}
            loop={true}
            controls={true}
            url={playVideo ? "https://www.youtube.com/watch?v=jsa4t-jLy0s" : ""}
          />
        </div>
      </div>
    </StyledVideo>,
    document.querySelector("body")
  );
};

export default VideoModal;
const StyledVideo = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  z-index: 500;
  &.close-modal {
    display: none;
  }
  .modal-overlay {
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    inset: 0;
    z-index: 100;
  }
  .modal-content {
    position: relative;
    -webkit-box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px rgba(0, 0, 0, 0.14), 0 1px 10px rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px rgba(0, 0, 0, 0.14),
      0 1px 10px rgba(0, 0, 0, 0.12);
    margin: auto;
    transition: 0.3s all;
    opacity: 1;
    z-index: 200;
  }
`;
