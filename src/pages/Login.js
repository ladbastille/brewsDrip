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

function Login({user}) {
  const [toggle, setToggle] = React.useState(true);
  //   const history = useHistory();
  //   const [email, setEmail] = React.useState("");
  //   const [password, setPassword] = React.useState("");
  //   const [activeItem, setActiveItem] = React.useState("signup");

  const handleOnClick = async (provider) => {
    console.log("SNS Btn Login");
    const res = await socialMediaAuth(provider);
    console.log(res);
  };

  return (
    <LoginBody>
      <LoginContainer toggle={toggle}>
        <Signin toggle={toggle} handleOnClick={handleOnClick} />
        <Signup toggle={toggle} handleOnClick={handleOnClick} />
        <Overlay toggle={toggle} setToggle={setToggle} />
      </LoginContainer>
    </LoginBody>
  );
}
export default Login;
