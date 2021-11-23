import React from "react";
import { useLocation, Link } from "react-router-dom";
import NotFoundBg from "../images/404_bg.png";
import styled from "styled-components";

const NotFoundDiv = styled.div`
  width: 50%;
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
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
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
        <NotFoundImg src={NotFoundBg}></NotFoundImg>
        <NotFoundH2>Not Found</NotFoundH2>
        <NotFoundH1>Go to Homepage.</NotFoundH1>
      </NotFoundDiv>
    </>
  );
};

export default NotFound;
