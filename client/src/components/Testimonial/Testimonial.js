import React from "react";
import styled from "styled-components";
import testimonialimg from "../../assets/testimonialimg.webp";

import TopClints from "../TopClints/TopClints";
const Testimonial = () => {
  return (
    <StyledTestimonial className="testimonial-section section">
      <div className="grid grid-cols-2 gap-x-4">
        <div className="parent-image">
          <div className="parent-img">
            <img src={testimonialimg} alt="" />
          </div>
        </div>
        <div className="relative flex flex-col">
          <div className="pb-3 mb-4 border-b border-gray-300">
            <h3 style={{ margin: 0 }} className="section-title">
              Clints Testimonial
            </h3>
          </div>
          <TopClints />
        </div>
      </div>
    </StyledTestimonial>
  );
};

export default Testimonial;
const StyledTestimonial = styled.div``;
