import React from "react";
import styled from "styled-components";
const Quantity = ({
  item = {},
  value = 1,
  handleDec = () => {},
  handleInc = () => {},
}) => {
  return (
    <StyledQuantity className="flex items-center justify-center">
      <div onClick={handleDec} className="select-none btn-decrease">
        -
      </div>
      <div className="cart-quantity">{value}</div>
      <div onClick={handleInc} className="select-none btn-increase">
        +
      </div>
    </StyledQuantity>
  );
};

export default Quantity;
const StyledQuantity = styled.div``;
