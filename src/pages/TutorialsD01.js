import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import "firebase/firestore";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import TutorialCard from "../components/TutorialCardBrew";

const TutorialsBrewDiv = styled.div`
font-family: Poppins, Arial, Helvetica, sans-serif;
padding: 20px;
justify-content: space-around;
width: 50%;
min-height: 560px;
/* background-color: #e5e5e5; */
`;

const CardListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  vertical-align: center;
  font-family: Poppins, Arial, Helvetica, sans-serif;
  margin: 15px;
  a:visited{
      color:#000000;
  }
`;

const CardListImg = styled.img`
  max-width: 100%;
  margin-bottom: 20px;
`;

const CardListH3 = styled.h3`
  font-size: 28px;
  line-height: 1.25;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const CardListH4 = styled.h4`
  font-size: 20px;
  line-height: 24px;
`;

const CardListText = styled.p`

  margin: 20px 0 24px;
  padding: 0;
  font-size: 14px;
  line-height: 1.6;
`;

const TutorialsD01 = () => {
  return (
    <>
    <TutorialsBrewDiv>
      <CardListDiv>
          <CardListH3>HOLIDAY PARTY DRINK RECIPE: THE GOLDEN JEWEL
</CardListH3>
          {/* <CardListIframe></CardListIframe> */}
          <CardListImg src={"https://cdn.shopify.com/s/files/1/0035/9372/files/hero.png?v=1573608420"}/>
          <CardListText>There are two critical essentials of any great party; delicious drinks and choice music. Thankfully, we’re ticking off the first box right here with The Golden Jewel: the perfect holiday-inspired drink. We tapped Josh, our Signature Beverage Coordinator, to create a custom holiday drink recipe for Streetlevel Instant Craft Coffee transforms our classic coffee blend into a winter wonderland. This recipe is ultra-versatile and able to be enjoyed with or without alcohol. Relax, we’ve got the whole party covered.</CardListText>
<CardListH4 style={{color:"#DE6932"}}>SYRUP INGREDIENT LIST [yields about 5 servings]</CardListH4>
<CardListText>1/2 Teaspoon Cinnamon<br/>
1/2 Teaspoon Nutmeg<br/>
200ml Unsweetened Cranberry Juice<br/>
50g Chopped Turkish Figs<br/>
100g Orange Marmalade<br/>
50ml Dark Maple Syrup </CardListText>
<CardListH4 style={{color:"#DE6932"}}>ADDITIONAL INGREDIENTS</CardListH4>
<CardListText>Streetlevel Instant Craft Coffee<br/>
Sparkling Water<br/>
Ice<br/>
Chambord (optional)<br/>
Bourbon (optional)

</CardListText>
<CardListH3>STEP ONE </CardListH3>
<CardListText>Combine all the syrup ingredients in a medium pot and bring to a boil. Reduce heat and simmer on low for 10 minutes.</CardListText>

<CardListH3>STEP TWO</CardListH3>
<CardListText>Strain the syrup into a glass container through a small mesh strainer and place it to the side to cool.</CardListText>

<CardListH3>STEP THREE </CardListH3>
<CardListText>Each drink will need half a packet of Instant Craft Coffee: Streetlevel. Pour the full contents of the packet into a mixing glass, adding 2 ounces of water then gently stirring to dissolve the coffee.</CardListText>

<CardListImg src={"https://cdn.shopify.com/s/files/1/0035/9372/files/holiday_process.png?v=1573608446"}/>

<CardListH3>STEP FOUR</CardListH3>
<CardListText>Fill a Collins glass with ice and add 1 ounce of the dissolved coffee.</CardListText>

<CardListImg src={"https://cdn.shopify.com/s/files/1/0035/9372/files/holiday_process2.png?v=1573608472"}/>

<CardListH3>STEP FIVE</CardListH3>
<CardListText>If going the alcoholic route, skip to step six. Fill the glass about two-thirds of the way with sparkling water then top off with 2 ounces of Jewel Syrup. Continue on to step seven.</CardListText>

<CardListImg src={"https://cdn.shopify.com/s/files/1/0035/9372/files/holiday_sage.png?v=1573608505"}/>

<CardListH3>STEP SIX</CardListH3>
<CardListText>If you’re here for the sauce, keep adding to your dissolved coffee and ice base with 2 ounces of Jewel Syrup, 1 ounce Chambord and 2 ounces Bourbon. Gently stir, then strain into a rocks glass over a large ice cube or sphere.</CardListText>

<CardListH3>STEP SEVEN</CardListH3>
<CardListText>Garnish with a fresh sage leaf.</CardListText>

<CardListImg src={"https://cdn.shopify.com/s/files/1/0035/9372/files/holiday_josh.png?v=1573608526"}/>
<CardListText>Our Golden Jewel holiday drink recipe is best served as an after-dinner coffee cocktail.</CardListText>

      </CardListDiv>
    </TutorialsBrewDiv>
    </>
  );
};

export default TutorialsD01;
