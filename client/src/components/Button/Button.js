import React from "react";
import styled from "styled-components";
const Button = ({
  onClick = null,
  children,
  className = "",
  to,
  border = false,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      className={`rounded-md btn-primary hover:text-white cursor-pointer border hover:bg-bgPrimary transition-all hover:border-bgPrimary border-secondary ${className}`}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
const StyledButton = styled.div`
  line-height: 38px;
  height: 38px;
  padding: 0 20px;
  background: #fff;
`;
