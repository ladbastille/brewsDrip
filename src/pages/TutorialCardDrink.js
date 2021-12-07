import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardListImg = styled.img`
  max-width: 100%;
  margin-bottom: 20px;
`;
const CardListH3 = styled.h3`
  font-size: 28px;
  line-height: 1.25;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
const CardListText = styled.p`
  margin-bottom: 24 px;
  margin: 0 0 15 px;
  padding: 0;
  font-size: 14px;
  line-height: 1.6;
`;

const CardListDiv = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  vertical-align: center;
  font-family: Poppins, Arial, Helvetica, sans-serif;
  margin: 15px;
  margin-bottom: 25px;

  a,
  a:visited {
    color: #000000;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const TutorialCardDrink = ({ src }) => {
  return (
    <>
      <CardListDiv>
        <Link to="/tutorials/drink/d01">
          <CardListImg
            src={
              "https://cdn.shopify.com/s/files/1/0035/9372/files/holiday_drink_module.jpg?v=1586383943"
            }
          />
          <CardListH3>HOLIDAY PARTY DRINK RECIPE: THE GOLDEN JEWEL</CardListH3>
          <CardListText>
            We’ve developed the perfect coffee-centric drink to spice up your
            holiday festivities. Recipe By: Josh Agbayani
          </CardListText>
        </Link>
      </CardListDiv>

      <CardListDiv>
        <Link to="/tutorials/drink/d02">
          <CardListImg
            src={
              "https://cdn.shopify.com/s/files/1/0035/9372/files/de_olla_blog_header_f8469d10-4a7f-4fc8-a698-dbdea50d8a8b.png?v=1606252138"
            }
          />
          <CardListH3>
            HOLIDAY DRINK HIGHLIGHT: THE CAFÉ DE OLLA CON PANNA
          </CardListH3>
          <CardListText>
            Alejandro Catalan, a barista from our Mateo café in Los Angeles,
            shares his inspiration on creating the Café de Olla con Panna.
          </CardListText>
        </Link>
      </CardListDiv>
    </>
  );
};

export default TutorialCardDrink;
