import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import "firebase/firestore";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import TutorialCard from "./TutorialCardBrew";

export const TutorialsBrewDiv = styled.div`
  font-family: Poppins, Arial, Helvetica, sans-serif;
  padding: 20px;
  justify-content: space-around;
  width: 50%;
  min-height: 560px;
  @media (max-width: 1024px) {
    width: 80%;
    iframe {
      width: 100%;

    }
  }
  @media (max-width: 768px) {
    width: 80%;
    iframe {
      width: 100%;
      height: 300px;
    }
  }
  @media (max-width: 375px) {
    width: 80%;
    iframe {
      width: 100%;
      height: 200px;
    }
  }
`;

export const CardListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  vertical-align: center;
  font-family: Poppins, Arial, Helvetica, sans-serif;
  /* margin: 15px; */
  a:visited {
    color: #000000;
  }
`;

// const CardListImg = styled.img`
//   max-width: 100%;
//   margin-bottom: 20px;
// `;

export const CardListH3 = styled.h3`
  font-size: 28px;
  line-height: 1.25;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const CardListText = styled.p`
  margin: 20px 0 24px;
  padding: 0;
  font-size: 14px;
  line-height: 1.6;
`;

const TutorialsB01 = () => {
  return (
    <>
      <TutorialsBrewDiv>
        <CardListDiv>
          <CardListH3>How to brew at home (or on the go): AeroPress</CardListH3>
          {/* <CardListIframe></CardListIframe> */}
          <iframe
            src="https://player.vimeo.com/video/480909965"
            width="640"
            height="360"
            frameborder="0"
            webkitallowfullscreen=""
            mozallowfullscreen=""
            allowfullscreen=""
          ></iframe>
          <CardListText>
            Learn how to brew delicious coffee at home! Today, we're featuring
            the Kalita Wave in our step-by-step guide. The wave-shaped brewer is
            built for even extraction and immersion while making it easy to play
            with brew ratios and contact time to pull out whatever flavor
            profiles maximize the cup.
          </CardListText>
        </CardListDiv>
      </TutorialsBrewDiv>
    </>
  );
};

export default TutorialsB01;
