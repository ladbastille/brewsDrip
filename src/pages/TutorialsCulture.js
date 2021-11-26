import React from "react";
import "firebase/firestore";
import styled from "styled-components";
import TutorialsCardCulture from "./TutorialCardCulture";

const TutorialsDiv = styled.div`
  font-family: Poppins, Arial, Helvetica, sans-serif;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  min-height: 560px;
`;

const TutorialsCulture = () => {
  return (
    <>
      <TutorialsDiv>
        <TutorialsCardCulture />
      </TutorialsDiv>
    </>
  );
};

export default TutorialsCulture;
