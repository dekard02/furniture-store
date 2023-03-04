import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
const StyledBackTop = styled.div`
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  position: fixed;
  z-index: 99;
  right: 30px;
  bottom: 30px;
  background-color: #dc2f02;
  border-radius: 100rem;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
const BackTop = () => {
  const dispatch = useDispatch();
  const [showBackTop, setShowBackTop] = useState(false);
  //   const { showBackTop } = useSelector((state) => state.global);
  useEffect(() => {
    const handleShow = () => {
      const scrollvalue = window.scrollY;
      setShowBackTop(scrollvalue > 2000);
    };
    window.addEventListener("scroll", handleShow);
    return () => window.removeEventListener("scroll", handleShow);
  }, [dispatch]);
  const handleBackTop = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };
  return (
    <StyledBackTop
      onClick={handleBackTop}
      className={` items-center justify-center ${
        showBackTop ? "flex" : "hidden"
      }`}
    >
      <i className="text-lg text-white leading-[0] bi bi-arrow-up"></i>
    </StyledBackTop>
  );
};

export default BackTop;
