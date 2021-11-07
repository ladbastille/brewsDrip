import React, { useState } from "react";
import styled from "styled-components";
import { SiFacebook, SiGoogle } from "react-icons/si";
import {StyledSpan} from './Signup'
import { facebookProvider, googleProvider } from "../utils/authMethods";
import firebase from "./../utils/firebase";
import { useHistory } from "react-router-dom";
import ReactLoading from 'react-loading';
import Input from './Input'
import { HeaderH1 } from "./Input";

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
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSignUp = (e) => {
    console.log("signUP");
    
    setIsLoading(true);
    e.preventDefault()
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("success");
        history.push("/");
        setIsLoading(false);
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            setErrorMessage('信箱已存在');
            break;
          case 'auth/invalid-email':
            setErrorMessage('信箱格式不正確');
            break;
          case 'auth/weak-password':
            setErrorMessage('密碼強度不足');
            break;
          default:
        }
        setIsLoading(false);
      });
  };

  const onSignIn = (e) => {
    console.log("signin");
    setIsLoading(true);
    e.preventDefault()
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("success");
        history.push("/");
        setIsLoading(false);
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
            setErrorMessage('信箱格式不正確');
            break;
          case 'auth/user-not-found':
            setErrorMessage('信箱不存在');
            break;
          case 'auth/wrong-password':
            setErrorMessage('密碼錯誤');
            break;
          default:
        }
        setIsLoading(false);
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
          onFocus={()=> setErrorMessage('')}
        />
        <StyledInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={()=> setErrorMessage('')}
        />
        <SubmitButton onClick={(e) => onSignIn(e)}>Sign In</SubmitButton>
        <SignupButton onClick={(e) => onSignUp(e)}>Sign Up</SignupButton>
        {errorMessage && <h5 >{errorMessage}</h5>}
        {isLoading ? (<ReactLoading color="#FBD850" type="spinningBubbles" />) : (<></>) }
      </StyledForm>
    </SigninContainer>
  );
};

export default Signin;
