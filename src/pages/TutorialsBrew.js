import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import "firebase/firestore";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import TutorialCard from "./TutorialCardBrew";
import TutorialCardBrew from "./TutorialCardBrew";

const TutorialsDiv = styled.div`
font-family: Poppins, Arial, Helvetica, sans-serif;
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
width: 100%;
min-height: 560px;
/* background-color: #e5e5e5; */
`;

const TutorialsBrew = () => {
  return (
    <>
    <TutorialsDiv>
      <TutorialCardBrew />
    </TutorialsDiv>
    </>
  );
};

export default TutorialsBrew;
