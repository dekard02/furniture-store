import React from "react";
import styled from "styled-components";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const InputStyles = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    outline: none;
    background-color: transparent;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    transition: all 0.2s linear;
    color: #aaaaaa;
    font-size: 14px;
  }
  input::-webkit-input-placeholder {
    color: #b2b3bd;
  }
  input::-moz-input-placeholder {
    color: #b2b3bd;
  }
  .input-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
/**
 *
 * @param {*} placeholder(optional) - Placeholder of input
 * @param {*} name(optional) - name of input
 * @param {*} control - control from react hook form
 * @returns Input
 */
const Input = ({ name = "", type = "text", children, control, ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <InputStyles hasIcon={children ? true : false}>
      <input
        className="px-3 py-2"
        id={name}
        type={type}
        {...field}
        {...props}
        min={0}
      />
      {children ? <div className="input-icon">{children}</div> : null}
    </InputStyles>
  );
};
Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  children: PropTypes.any,
  control: PropTypes.any.isRequired,
};
export default Input;
