import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import "firebase/firestore";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import BREW from "../images/BREW.jpg";
import DRINK from "../images/DRINK.jpg";
import CULTURE from "../images/CULTURE.jpg";

const TutorialsDiv = styled.div`
  font-family: Poppins, Arial, Helvetica, sans-serif;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  min-height: 50vh;
  background-color: #e5e5e5;
  margin-bottom:10px;
`;

const CardDiv = styled.div`
  width: 33.33.%;
  /* height: 50vh; */
  position: relative;
  border: 6px solid #ffffff;
  opacity:0.75;
  &:hover{
      opacity:1;
  }
`;

const CategoryImg = styled.img`
  width: 350px;
  height: 550px;
  
`;

const CategoryH2 = styled.h2`
  color: #ffffff;
  font-size: 3rem;
  font-style: bolder;
  text-align: center;
  position:absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const TutorialsIndex = () => {
  return (
    <>
      <TutorialsDiv>
        <Link to="/tutorials/brew">
          <CardDiv>
            <CategoryH2>BREW</CategoryH2>
            <CategoryImg src={BREW} />
          </CardDiv>
        </Link>

        <Link to="/tutorials/drink">
          <CardDiv>
            <CategoryH2>DRINK</CategoryH2>
            <CategoryImg src={DRINK} />
          </CardDiv>
        </Link>

        <Link to="/tutorials/culture">
          <CardDiv>
            <CategoryH2>CULTURE</CategoryH2>
            <CategoryImg src={CULTURE} />
          </CardDiv>
        </Link>
      </TutorialsDiv>
    </>
  );
};

export default TutorialsIndex;
