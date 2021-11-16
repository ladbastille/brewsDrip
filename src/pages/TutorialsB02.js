import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import "firebase/firestore";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import TutorialCard from "../components/TutorialCardBrew";

const TutorialsBrewDiv = styled.div`
font-family: Poppins, Arial, Helvetica, sans-serif;
padding: 20px;
justify-content: space-around;
width: 50%;
min-height: 560px;
/* background-color: #e5e5e5; */
`;

const CardListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  vertical-align: center;
  font-family: Poppins, Arial, Helvetica, sans-serif;
  margin: 15px;
  a:visited{
      color:#000000;
  }
`;

// const CardListImg = styled.img`
//   max-width: 100%;
//   margin-bottom: 20px;
// `;
const CardListH3 = styled.h3`
  font-size: 28px;
  line-height: 1.25;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const CardListText = styled.p`

  margin: 20px 0 24px;
  padding: 0;
  font-size: 14px;
  line-height: 1.6;
`;

const TutorialsB02 = () => {
  return (
    <>
    <TutorialsBrewDiv>
      <CardListDiv>
          <CardListH3>How to brew at home: Kalita Wave</CardListH3>
          {/* <CardListIframe></CardListIframe> */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/1wehPbivN0k?start=00" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <CardListText>Learn how to brew delicious coffee at home! Today, we're featuring the Kalita Wave in our step-by-step guide. The wave-shaped brewer is built for even extraction and immersion while making it easy to play with brew ratios and contact time to pull out whatever flavor profiles maximize the cup.</CardListText>

      </CardListDiv>
    </TutorialsBrewDiv>
    </>
  );
};

export default TutorialsB02;
