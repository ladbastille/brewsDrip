import React from "react";
import styled from "styled-components";
import TutorialCardBrew from "./TutorialCardBrew";

const TutorialsDiv = styled.div`
  font-family: Poppins, Arial, Helvetica, sans-serif;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  min-height: 560px;
  box-sizing: border-box;
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
