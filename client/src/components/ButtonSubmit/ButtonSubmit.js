import { LoadingSpinner } from "../../components/Loading";
import React from "react";
import styled, { css } from "styled-components";
const StyledButtonSubmit = styled.button`
  padding: 9px 30px 6px;
  transition: all 0.4s ease-in-out;
  outline: none;
  white-space: nowrap;
  height: ${(props) => props.height || ""};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00b4d8;

  ${(props) =>
    props.large === true &&
    css`
      padding: 10px 24px;
    `};
  &:hover {
    ${(props) =>
      props.large === true &&
      css`
        background-color: #fff;
        color: ${(props) => props.theme.primary};
      `};
  }
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
const ButtonSubmit = ({
  className,
  large = false,
  children,
  onClick = () => {},
  type = "button",
  ...props
}) => {
  let { isLoading, to } = props;
  const child = !!isLoading ? <LoadingSpinner></LoadingSpinner> : children;

  return (
    <StyledButtonSubmit
      type={type}
      large={large}
      onClick={onClick}
      {...props}
      className={`whitespace-nowrap w-full text-white font-light rounded-md text-base ${className}`}
    >
      {child}
    </StyledButtonSubmit>
  );
};

export default ButtonSubmit;
