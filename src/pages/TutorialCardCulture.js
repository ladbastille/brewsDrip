import React, {  } from "react";
import "firebase/firestore";
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

const TutorialCardCulture = ({ src }) => {
  return (
    <>
      <CardListDiv>
        <Link to="/tutorials/brew/c01">
          <CardListImg
            src={
              "https://cdn.shopify.com/s/files/1/0035/9372/files/winc_header.png?v=1624899409"
            }
          />
          <CardListH3>
            COFFEE AND WINE: YOUR TWO FAVORITE BEVERAGES HAVE MORE IN COMMON
            TH...
          </CardListH3>
          <CardListText>
            Verve’s co-founder Colby Barr and Winc’s winemaker Bobby Daugherty
            discusses the similarities between coffee and wine, common flavor
            profiles, and tips for how to select and taste both of these beloved
            beverages at home like a pro.
          </CardListText>
        </Link>
      </CardListDiv>

      <CardListDiv>
        <Link to="/tutorials/brew/c02">
          <CardListImg
            src={
              "https://cdn.shopify.com/s/files/1/0035/9372/files/womenincoffee_hero_module.jpg?v=1583433728"
            }
          />
          <CardListH3>WOMEN IN THE COFFEE INDUSTRY</CardListH3>
          <CardListText>
            We touched down in Colombia to pay a special visit to a truly
            memorable woman and her farm in Chachagüí.
          </CardListText>
        </Link>
      </CardListDiv>
    </>
  );
};

export default TutorialCardCulture;
