import React, { useState } from "react";
import styled from "styled-components";
import firebase from "../utils/firebase";
import "firebase/auth";
import { SiFacebook, SiGoogle } from "react-icons/si";
import { useHistory } from "react-router-dom";
import ReactLoading from "react-loading";
import { facebookProvider, googleProvider } from "../utils/authMethods";
import { HeaderH1 } from "./Input";
import {
  SocialContainer,
  StyledForm,
  StyledInput,
  SubmitButton,
} from "./Signin";

const Signup = ({ toggle, handleOnClick }) => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  // const handleSubmit = () => {
  //     setActiveItem('signup');
  //     dispatch({type: 'email/set'})
  // }

  const onSignUp = (e) => {
    console.log("signUP");
    setIsLoading(true);

    // e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);

        //sign up with default photo
        const documentRef = firebase
          .firestore()
          .collection("members")
          .doc(firebase.auth().currentUser.uid);

        let dataObj = {
          createdAt: firebase.firestore.Timestamp.now(),
          displayName:
            firebase.auth().currentUser.displayName || "Coffee Lover",
          photoURL:
            "https://firebasestorage.googleapis.com/v0/b/brewsdrip.appspot.com/o/user-pics%2FdefaultUser.png?alt=media&token=7e5e71c8-aabb-4bdd-a55c-72ec3659b41d",
          uid: firebase.auth().currentUser.uid,
          email: firebase.auth().currentUser.email,
        };
        console.log(dataObj);
        documentRef.set(dataObj);
      })
      .then(() => {
        console.log("success");
        history.push("/");
        setIsLoading(false);

        // console.log("success");
        // history.push("/");
        // setIsLoading(false);
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
            setErrorMessage("信箱已存在");
            break;
          case "auth/invalid-email":
            setErrorMessage("信箱格式不正確");
            break;
          case "auth/weak-password":
            setErrorMessage("密碼強度不足(最少6位數)");
            break;
          default:
        }
        setIsLoading(false);
      });
  };
  return (
    <SignupContainer avtive={toggle}>
      <StyledForm>
        <HeaderH1>Create Account</HeaderH1>
        <SocialContainer>
          <div>
            <SiFacebook onClick={() => handleOnClick(facebookProvider)} />
          </div>
          <div>
            <SiGoogle onClick={() => handleOnClick(googleProvider)} />
          </div>
        </SocialContainer>
        <StyledSpan>or use your email for registration</StyledSpan>
        <StyledInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setErrorMessage("")}
        />
        <StyledInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setErrorMessage("")}
        />
        <SubmitButton color={"#7E876D"} onClick={(e) => onSignUp(e)}>
          Sign Up
        </SubmitButton>
        {errorMessage && <h5>{errorMessage}</h5>}
        {isLoading ? (
          <ReactLoading color="#FBD850" type="spinningBubbles" />
        ) : (
          <></>
        )}
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
