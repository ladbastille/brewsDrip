import styled from "styled-components";
import BackgroundVideo from "../components/BackgroundVideo";
import { Link } from "react-router-dom";

const TutorialsSection = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-shadow: inset 0 0 0 1000px rgba(0.02);
  object-fit: contain;
`;

const TutorialsParagraph = styled.p`
  font-family: "Poppins”, sans-serif";
  font-size: 2.5rem;
  margin-left: 40px;
  color: #000;
  width: 20%;
`;

const BtnDiv = styled.div`
  margin-top: 32px;
  margin-left: 40px;
`;

export const BtnLink = styled(Link)`
  text-decoration: none;
`;

export const TutorialsBtn = styled.div`
  margin: 6px;
  cursor: pointer;
  font-family: "Poppins”, sans-serif";
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
  background-color: #de6932;
  border-radius: 10px;
  outline: none;
  padding: 12px 45px;
  transition: all 0.3s ease-out;
  font-size: 0.9rem;
  border: none;

  &:hover {
    color: #000000;
    transition: all 0.3s ease-out;
    background-color: transparent;
    border: #de6932 2px solid;
  }
`;

function Home() {
  return (
    <>
      <TutorialsSection>
        <BackgroundVideo />
        <TutorialsParagraph>Let’s brew together!</TutorialsParagraph>
        <BtnDiv>
          <BtnLink to="/tutorials">
            <TutorialsBtn>START</TutorialsBtn>
          </BtnLink>
        </BtnDiv>
      </TutorialsSection>
    </>
  );
}

export default Home;
