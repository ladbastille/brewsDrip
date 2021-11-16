import React, { useState } from "react";
import styled from "styled-components";

export const SigninContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  transform: ${(props) => props.active && `translateX(100%)`};
  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const StyledForm = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
  @media (max-width: 425px) {
    background: #ffb75e;
    background: -webkit-linear-gradient(to right, #ed8f03, #ffb75e);
    background: linear-gradient(to right, #ed8f03, #ffb75e);
  }
`;

export const HeaderH1 = styled.h1`
  font-weight: bold;
  font-size: ${(props) => props.fontSize?props.fontSize:"2rem"};
  text-align: center;
  margin: 0;
  margin-bottom: ${(props) => props.marginbottom};
  margin-top: ${(props) => props.margintop};
  color: ${(props) => (props.color ? props.color : "#000000")};
`;

// const HeaderSingin = styled(HeaderH1)`
//   @media (max-width: 425px) {
//     color: #ffffff;
//   }
// `;

export const SocialContainer = styled.div`
  margin: 20px 0;
  a {
    border: 1.5px solid #ecd9bc;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    height: 40px;
    width: 40px;
    text-decoration: none;
    color: black;
    cursor: pointer;
    @media (max-width: 425px) {
      color: white;
    }
    a:visited {
      color: black;
    }
  }
`;

export const SocialLoginButton = styled.i`
  margin-right: 1rem;
`;

export const StyledInput = styled.input`
  background-color: #fbd850;
  border: 1px solid #ffffff;
  margin: 4px 3px 3px 3px;
  padding: ${(props) => (props.padding ? props.padding : "10px 8px")};
  width: ${(props) => (props.width ? props.width : "70%")};
  border-radius: 10px;
`;

export const SubmitButton = styled.button`
  border-radius: 10px;
  border: 1px solid #de6932;
  background-color: #de6932;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  margin-top: 10px;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
`;

export const SignupButton = styled(SubmitButton)`
  display: none;
  margin-top: 8px;
  background-color: #ed8f03;
  border-color: #ffffff;
  padding: 12px 43px;
  @media (max-width: 425px) {
    display: block;
  }
`;

const Input = ({ onChange, type, placeholder, value, ...props }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Input;
