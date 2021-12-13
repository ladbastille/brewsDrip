import styled from "styled-components";
import { Link } from "react-router-dom";
import BackgroundVideo from "./components/BackgroundVideo";
import {TutorialsBtn} from "../../components/SubElements"

const HomeDiv = styled.div`
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  width: 100%;
  min-height: 450px;
  padding: 0.5%;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: inset 0 0 0 1000px rgba(0.02);
  object-fit: contain;
  box-sizing: border-box;
  position:relative;
  @media (max-width: 1024px) {
    min-height: 400px;
  }
  @media (max-width: 768px) {
    min-height: 350px;
  }
  @media (max-width: 375px) {
    flex-direction: column-reverse;
    min-height: 490px;
    justify-content: space-evenly;
  }
`;

const CTADiv = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-left: 7%;
  @media (max-width: 1024px) {
    margin-left: 3%;
  }
  @media (max-width: 768px) {
    margin-left: 2%;
  }
`;

const TutorialsParagraph = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 2.5rem;
  color: #000;
  width: 20%;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 375px) {
    font-size: 2rem;
    width: 70%;
  }
`;

const BtnDiv = styled.div`
  margin-top: 32px;
`;

function Home() {
  return (
    <>
      <HomeDiv>
        <CTADiv>
          <TutorialsParagraph>Let’s brew together!</TutorialsParagraph>
          <BtnDiv>
            <Link to="/tutorials">
              <TutorialsBtn>Start</TutorialsBtn>
            </Link>
          </BtnDiv>
        </CTADiv>
        <BackgroundVideo />
      </HomeDiv>
    </>
  );
}

export default Home;
