import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import "firebase/auth";
import socialMediaAuth from "../utils/auth";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Overlay from "../components/Overlay";
import LoginContainer from "../components/LoginContainer";

const LoginBody = styled.div`
  box-sizing: border-box;
  font-family: "Poppins”, sans-serif";
  background: #f6f5f7;
  margin: 10px auto;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: -10%;
  }
`;

function Login() {
  const history = useHistory();
  const [toggle, setToggle] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [activeItem, setActiveItem] = React.useState("signup");

  const handleOnClick = async (provider) => {
    console.log("SNS Btn");
    const res = await socialMediaAuth(provider);
    console.log(res);
  };

  function onSubmit() {
    if (activeItem === "signup") {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .then(() => {
          history.push("/");
        });
    } else if (activeItem === "signin") {
      firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        .then(() => {
          history.push("/");
        });
    }
  }

  return (
    <LoginBody>
      <LoginContainer toggle={toggle}>
        <Signin
          toggle={toggle}
          handleOnClick={handleOnClick}
          email={email}
          password={password}
          activeItem={activeItem}
          onSubmit={() => onSubmit}
        />
        <Signup
          toggle={toggle}
          onClick={() => onClick}
          email={email}
          password={password}
          activeItem={activeItem}
          onSubmit={() => onSubmit}
        />
        <Overlay toggle={toggle} setToggle={setToggle} />
      </LoginContainer>
    </LoginBody>
  );
}
export default Login;
