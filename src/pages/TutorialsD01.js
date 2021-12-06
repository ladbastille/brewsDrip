import React from "react";
import "firebase/firestore";
import styled from "styled-components";
import {
  TutorialsBrewDiv,
  CardListDiv,
  CardListH3,
  CardListText,
} from "./TutorialsB01";

const CardListImg = styled.img`
  max-width: 100%;
  margin-bottom: 20px;
`;

const CardListH4 = styled.h4`
  font-size: 20px;
  line-height: 24px;
`;

const TutorialsD01 = () => {
  return (
    <>
      <TutorialsBrewDiv>
        <CardListDiv>
          <CardListH3>HOLIDAY PARTY DRINK RECIPE: THE GOLDEN JEWEL</CardListH3>

          <CardListImg
            src={
              "https://cdn.shopify.com/s/files/1/0035/9372/files/hero.png?v=1573608420"
            }
          />
          <CardListText>
            There are two critical essentials of any great party; delicious
            drinks and choice music. Thankfully, we’re ticking off the first box
            right here with The Golden Jewel: the perfect holiday-inspired
            drink. We tapped Josh, our Signature Beverage Coordinator, to create
            a custom holiday drink recipe for Streetlevel Instant Craft Coffee
            transforms our classic coffee blend into a winter wonderland. This
            recipe is ultra-versatile and able to be enjoyed with or without
            alcohol. Relax, we’ve got the whole party covered.
          </CardListText>
          <CardListH4 style={{ color: "#DE6932" }}>
            SYRUP INGREDIENT LIST [yields about 5 servings]
          </CardListH4>
          <CardListText>
            1/2 Teaspoon Cinnamon
            <br />
            1/2 Teaspoon Nutmeg
            <br />
            200ml Unsweetened Cranberry Juice
            <br />
            50g Chopped Turkish Figs
            <br />
            100g Orange Marmalade
            <br />
            50ml Dark Maple Syrup{" "}
          </CardListText>
          <CardListH4 style={{ color: "#DE6932" }}>
            ADDITIONAL INGREDIENTS
          </CardListH4>
          <CardListText>
            Streetlevel Instant Craft Coffee
            <br />
            Sparkling Water
            <br />
            Ice
            <br />
            Chambord (optional)
            <br />
            Bourbon (optional)
          </CardListText>
          <CardListH4>STEP ONE </CardListH4>
          <CardListText>
            Combine all the syrup ingredients in a medium pot and bring to a
            boil. Reduce heat and simmer on low for 10 minutes.
          </CardListText>

          <CardListH4>STEP TWO</CardListH4>
          <CardListText>
            Strain the syrup into a glass container through a small mesh
            strainer and place it to the side to cool.
          </CardListText>

          <CardListH4>STEP THREE </CardListH4>
          <CardListText>
            Each drink will need half a packet of Instant Craft Coffee:
            Streetlevel. Pour the full contents of the packet into a mixing
            glass, adding 2 ounces of water then gently stirring to dissolve the
            coffee.
          </CardListText>

          <CardListImg
            src={
              "https://cdn.shopify.com/s/files/1/0035/9372/files/holiday_process.png?v=1573608446"
            }
          />

          <CardListH4>STEP FOUR</CardListH4>
          <CardListText>
            Fill a Collins glass with ice and add 1 ounce of the dissolved
            coffee.
          </CardListText>

          <CardListImg
            src={
              "https://cdn.shopify.com/s/files/1/0035/9372/files/holiday_process2.png?v=1573608472"
            }
          />

          <CardListH4>STEP FIVE</CardListH4>
          <CardListText>
            If going the alcoholic route, skip to step six. Fill the glass about
            two-thirds of the way with sparkling water then top off with 2
            ounces of Jewel Syrup. Continue on to step seven.
          </CardListText>

          <CardListImg
            src={
              "https://cdn.shopify.com/s/files/1/0035/9372/files/holiday_sage.png?v=1573608505"
            }
          />

          <CardListH4>STEP SIX</CardListH4>
          <CardListText>
            If you’re here for the sauce, keep adding to your dissolved coffee
            and ice base with 2 ounces of Jewel Syrup, 1 ounce Chambord and 2
            ounces Bourbon. Gently stir, then strain into a rocks glass over a
            large ice cube or sphere.
          </CardListText>

          <CardListH4>STEP SEVEN</CardListH4>
          <CardListText>Garnish with a fresh sage leaf.</CardListText>

          <CardListImg
            src={
              "https://cdn.shopify.com/s/files/1/0035/9372/files/holiday_josh.png?v=1573608526"
            }
          />
          <CardListText>
            Our Golden Jewel holiday drink recipe is best served as an
            after-dinner coffee cocktail.
          </CardListText>
        </CardListDiv>
      </TutorialsBrewDiv>
    </>
  );
};

export default TutorialsD01;
