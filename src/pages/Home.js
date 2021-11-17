import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BackgroundVideo from "../components/BackgroundVideo";


const HomeDiv = styled.div`
  width: 100%;
  min-height:450px;
  padding:0.8rem;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: inset 0 0 0 1000px rgba(0.02);
  object-fit: contain;
  @media (max-width:1024px){
    min-height: 400px;
  }
  @media (max-width:768px){
    min-height: 350px;
  }
  @media (max-width:375px){
    flex-direction:column-reverse;
    min-height: 490px;
    justify-content: space-evenly;
  }
`;

const CTADiv =styled.div`
display:flex;
flex-direction:column;
align-self:center;
margin-left: 15px;  
`

const TutorialsParagraph = styled.p`
  font-family: "Poppins”, sans-serif";
  font-size: 2.5rem;
  /* margin-left: 40px; */
  color: #000;
  width: 20%;
  @media (max-width:375px){
    font-size: 1.5rem;
  }
`;

const BtnDiv = styled.div`
  margin-top: 32px;
`;

export const TutorialsBtn = styled.a`
  font-family: "Poppins”, sans-serif";
  cursor: pointer;
  font-weight: 700;
  color: #ffffff;
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

  @media (max-width:375px){
    padding: 10px 40px;
  }
`;

function Home() {


  return (
    <>
    
      <HomeDiv> 
        <CTADiv><TutorialsParagraph>Let’s brew together!</TutorialsParagraph>
        <BtnDiv>
          <Link to="/tutorials">
            <TutorialsBtn>START</TutorialsBtn>
          </Link>
        </BtnDiv></CTADiv>
        
        <BackgroundVideo 
        /> 
      </HomeDiv>
      
    </>
  );
}

export default Home;
