import { useState } from "react";
import styled from "styled-components";
import { socialMediaAuth } from "../../utils/firebase";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Overlay from "./components/Overlay";

const LoginContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
`;

const LoginBody = styled.div`
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  background: #f6f5f7;
  margin: 20px auto;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: -10%;
    margin: 20px auto;
  }
`;

function Login() {
  const [toggle, setToggle] = useState(true);
  const handleOnClick = async (provider) => {
    await socialMediaAuth(provider);
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
