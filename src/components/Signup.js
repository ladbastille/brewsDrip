import React, { useState } from "react";
import styled from "styled-components";
import firebase from "../utils/firebase";
import "firebase/auth";
import { SiFacebook, SiGoogle } from "react-icons/si";
import { useHistory } from "react-router-dom";
import socialMediaAuth from "../utils/auth";
import { facebookProvider, googleProvider } from "../utils/authMethods";
import {
  SocialContainer,
  StyledForm,
  HeaderH1,
  StyledInput,
  SubmitButton,
} from "./Signin";

const Signup = ({ toggle, handleOnClick }) => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const handleSubmit = () => {
  //     setActiveItem('signup');
  //     dispatch({type: 'email/set'})
  // }

  const onSignUp = (e) => {
    console.log("signUP");
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("success");
        history.push("/");
      });
  };

  return (
    <SignupContainer avtive={toggle}>
      <StyledForm>
        <HeaderH1>Create Account</HeaderH1>
        <SocialContainer>
          <a>
            <SiFacebook onClick={() => handleOnClick(facebookProvider)} />
          </a>
          <a>
            <SiGoogle onClick={() => handleOnClick(googleProvider)} />
          </a>
        </SocialContainer>
        <StyledSpan>or use your email for registration</StyledSpan>
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
        <SubmitButton onClick={(e) => onSignUp(e)}>Sign Up</SubmitButton>
      </StyledForm>
    </SignupContainer>
  );
};

const SignupContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 50%;
  width: 50%;
  transform: ${(props) => props.active && `translateX(100%)`};
  opacity: ${(props) => (props.active ? `0` : `1`)};
  z-index: ${(props) => (props.active ? `5` : `1`)};
  animation: ${(props) => props.active && `show 0.6s`};

  @keyframes show {
    0%,
    49.99% {
      opacity: 0;
      z-index: 1;
    }

    50%,
    100% {
      opacity: 1;
      z-index: 5;
    }
  }
`;

export const StyledSpan = styled.span`
  font-size: 12px;
  font-weight: 450;
  color: #646464;

  @media (max-width: 425px) {
    color: #ffffff;
  }
`;

export default Signup;