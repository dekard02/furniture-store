import React from "react";
import styled from "styled-components";
export default function LoadingCircle() {
  return (
    <StyledLoadingCircle className="flex justify-start">
      <div className="circle-loading"></div>
    </StyledLoadingCircle>
  );
}
const StyledLoadingCircle = styled.div`
  .circle-loading {
    width: 30px;
    height: 30px;
    border-radius: 99rem;
    position: relative;
  }

  .circle-loading:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    border: 4px solid transparent;
    border-right-color: #ff6bcb;
    border-bottom-color: #ffa400;
    animation: circleLoading 1s forwards infinite linear;
  }

  @keyframes circleLoading {
    to {
      transform: rotate(360deg);
    }
  }
`;
