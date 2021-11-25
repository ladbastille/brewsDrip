import React from "react";
import NotFoundCoffee from "../images/coffee-spill-404.png";
import styled from "styled-components";

const NotFoundDiv = styled.div`
  font-family: "Poppins", sans-serif;
  width: 70%;
  margin: 0 auto;
  object-fit: content;
  position: relative;
  @media (max-width: 375px) {
    width: 80%;
  }
`;

const NotFoundImg = styled.img`
  width: 100%;
`;
const NotFoundH1 = styled.h1`
  font-size: 7rem;
  position: absolute;
  color: #ffffff;
  font-weight: bolder;
  bottom: 20%;
  right: 10%;
`;
const NotFoundH2 = styled.h2`
  position: absolute;
  top: 82%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const NotFound = () => {
  return (
    <>
      <NotFoundDiv>
        <NotFoundImg src={NotFoundCoffee}></NotFoundImg>
        <NotFoundH1>Not Found</NotFoundH1>
        <NotFoundH2>Go to Homepage.</NotFoundH2>
      </NotFoundDiv>
    </>
  );
};

export default NotFound;
