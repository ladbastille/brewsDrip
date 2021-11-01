import React, { useState } from "react";
import styled from "styled-components";
import { SiFacebook, SiGoogle } from "react-icons/si";
import {StyledSpan} from './Signup'
import { facebookProvider, googleProvider } from "../utils/authMethods";
import firebase from "./../utils/firebase";
import { useHistory } from "react-router-dom";
import Input from './Input'

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
  margin: 0;
  font-size: 2em;
`;

const HeaderSingin = styled(HeaderH1)`
  @media (max-width: 425px) {
    color: #ffffff;
  }
`;

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
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  border-radius: 10px;
  border: 1px solid #de6932;
  background-color: #de6932;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  margin-top:10px;
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

const Signin = ({ toggle, handleOnClick, }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = (e) => {
    console.log("signUP");
    e.preventDefault()
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("success");
        history.push("/");
      });
  };

  const onSignIn = (e) => {
    console.log("signin");
    e.preventDefault()
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("success");
        history.push("/");
      });
  };

  return (
    <SigninContainer avtive={toggle}>
      <StyledForm>
      {/* <Input type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}/> */}
        <HeaderSingin>Welcome!</HeaderSingin>
        <SocialContainer>
          <a>
            <SiFacebook onClick={() => handleOnClick(facebookProvider)} />
          </a>
          <a>
            <SiGoogle onClick={() => handleOnClick(googleProvider)} />
          </a>
        </SocialContainer>
        <StyledSpan>press buttons above or use email to signin</StyledSpan>
        <StyledInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SubmitButton onClick={(e) => onSignIn(e)}>Sign In</SubmitButton>
        <SignupButton onClick={(e) => onSignUp(e)}>Sign Up</SignupButton>
      </StyledForm>
    </SigninContainer>
  );
};

export default Signin;
