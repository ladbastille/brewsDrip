import React from "react";
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

const TutorialsB03 = () => {
  return (
    <>
      <TutorialsBrewDiv>
        <CardListDiv>
          <CardListH3>How To Brew At Home: Chemex</CardListH3>

          <CardListImg
            src={
              "https://cdn.shopify.com/s/files/1/0035/9372/files/chemex_hero.jpeg?v=1597780166"
            }
          ></CardListImg>
          <CardListText>
            Learn how to brew delicious coffee at home! Today, we're featuring
            the Kalita Wave in our step-by-step guide. The wave-shaped brewer is
            built for even extraction and immersion while making it easy to play
            with brew ratios and contact time to pull out whatever flavor
            profiles maximize the cup.
          </CardListText>

          <CardListText>COFFEE FOR ONE PERSON:</CardListText>
          <CardListH4>250g 15g medium</CardListH4>
          <CardListText>COFFEE FOR TWO PERSON:</CardListText>
          <CardListH4>450g 25g medium</CardListH4>
          <br />
          <br />
          <CardListH4>STEP 1</CardListH4>
          <CardListText>
            Place the three folds of the filter against the spout and single
            fold on the opposite side. Pre-heat the vessel and rinse off the
            paper taste by slowly pouring hot water around the filter. Refill
            your kettle with cold water and set to 205'.
          </CardListText>

          <CardListH4>STEP 2</CardListH4>
          <CardListText>
            Using a scale, place a small vessel on top, then tare before adding
            the whole beans. For the 3 cup recipe, we'll be measuring out 15
            grams of coffee.
          </CardListText>

          <CardListH4>STEP 3</CardListH4>
          <CardListText>
            Pour the measured whole beans into the grinder. Grind to medium
            size.
          </CardListText>

          <CardListH4>STEP 4</CardListH4>
          <CardListText>
            Gently pull back the filter near the spout to empty the hot water.
            Place the filter back and add the ground coffee. Place the Chemex on
            the scale, then tare.
          </CardListText>

          <CardListH4>STEP 5</CardListH4>
          <CardListText>
            Start your timer then slowly pour hot water over the coffee, making
            sure to saturate thoroughly until you reach 50 grams.
          </CardListText>

          <CardListH4>STEP 6</CardListH4>
          <CardListText>
            When the timer reaches 40 seconds, start your second pour in a slow,
            circular motion until you reach 115 grams.
          </CardListText>

          <CardListH4>STEP 7</CardListH4>
          <CardListText>
            When the water is at the coffee grounds, start your third pour in a
            slow, circular motion until you reach 175 grams.
          </CardListText>

          <CardListH4>STEP 8</CardListH4>
          <CardListText>
            When the water is at the coffee grounds again, continue with your
            final pour in a slow, circular motion until you reach 225 grams.{" "}
          </CardListText>
          <CardListH4>STEP 9</CardListH4>
          <CardListText>
            When the timer reaches about 3:30 - 4 minutes, you're ready to
            enjoy. Remove the coffee filter, grab your favorite mug, and enjoy!
          </CardListText>

          <strong>PRO TIP:</strong>
          <CardListText>
            If you aren't hitting your brew times, you'll need to adjust your
            grind size. Coarser = faster brewing. Finer = slower brewing.
          </CardListText>
        </CardListDiv>
      </TutorialsBrewDiv>
    </>
  );
};

export default TutorialsB03;
