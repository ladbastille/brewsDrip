import React from "react";
import "firebase/firestore";
import styled from "styled-components";
import TutorialCardDrink from "./TutorialCardDrink";

const TutorialsDiv = styled.div`
  font-family: Poppins, Arial, Helvetica, sans-serif;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  min-height: 560px;
  box-sizing:border-box;
`;

const TutorialsDrink = () => {
  return (
    <>
      <TutorialsDiv>
        <TutorialCardDrink />
      </TutorialsDiv>
    </>
  );
};

export default TutorialsDrink;
