import React from "react";
import "firebase/firestore";
import {
  TutorialsBrewDiv,
  CardListDiv,
  CardListH3,
  CardListText,
} from "./TutorialsB01";

const TutorialsB02 = () => {
  return (
    <>
      <TutorialsBrewDiv>
        <CardListDiv>
          <CardListH3>How to brew at home: Kalita Wave</CardListH3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/1wehPbivN0k?start=00"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
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

export default TutorialsB02;
