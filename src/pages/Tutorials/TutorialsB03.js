import {
  TutorialsArticleDiv,
  ArticleCardListDiv,
  ArticleCardListH3,
  ArticleCardListText,
  ArticleCardListImg,
  ArticleCardListH4,
} from "./components/TutorialsStyledComponents";

const TutorialsB03 = () => {
  return (
    <TutorialsArticleDiv>
      <ArticleCardListDiv>
        <ArticleCardListH3>How To Brew At Home: Chemex</ArticleCardListH3>

        <ArticleCardListImg
          src={
            "https://cdn.shopify.com/s/files/1/0035/9372/files/chemex_hero.jpeg?v=1597780166"
          }
        ></ArticleCardListImg>
        <ArticleCardListText>
          Learn how to brew delicious coffee at home! Today, we're featuring the
          Kalita Wave in our step-by-step guide. The wave-shaped brewer is built
          for even extraction and immersion while making it easy to play with
          brew ratios and contact time to pull out whatever flavor profiles
          maximize the cup.
        </ArticleCardListText>

        <ArticleCardListText>COFFEE FOR ONE PERSON:</ArticleCardListText>
        <ArticleCardListH4>250g 15g medium</ArticleCardListH4>
        <ArticleCardListText>COFFEE FOR TWO PERSON:</ArticleCardListText>
        <ArticleCardListH4>450g 25g medium</ArticleCardListH4>
        <br />
        <br />
        <ArticleCardListH4>STEP 1</ArticleCardListH4>
        <ArticleCardListText>
          Place the three folds of the filter against the spout and single fold
          on the opposite side. Pre-heat the vessel and rinse off the paper
          taste by slowly pouring hot water around the filter. Refill your
          kettle with cold water and set to 205'.
        </ArticleCardListText>

        <ArticleCardListH4>STEP 2</ArticleCardListH4>
        <ArticleCardListText>
          Using a scale, place a small vessel on top, then tare before adding
          the whole beans. For the 3 cup recipe, we'll be measuring out 15 grams
          of coffee.
        </ArticleCardListText>

        <ArticleCardListH4>STEP 3</ArticleCardListH4>
        <ArticleCardListText>
          Pour the measured whole beans into the grinder. Grind to medium size.
        </ArticleCardListText>

        <ArticleCardListH4>STEP 4</ArticleCardListH4>
        <ArticleCardListText>
          Gently pull back the filter near the spout to empty the hot water.
          Place the filter back and add the ground coffee. Place the Chemex on
          the scale, then tare.
        </ArticleCardListText>

        <ArticleCardListH4>STEP 5</ArticleCardListH4>
        <ArticleCardListText>
          Start your timer then slowly pour hot water over the coffee, making
          sure to saturate thoroughly until you reach 50 grams.
        </ArticleCardListText>

        <ArticleCardListH4>STEP 6</ArticleCardListH4>
        <ArticleCardListText>
          When the timer reaches 40 seconds, start your second pour in a slow,
          circular motion until you reach 115 grams.
        </ArticleCardListText>

        <ArticleCardListH4>STEP 7</ArticleCardListH4>
        <ArticleCardListText>
          When the water is at the coffee grounds, start your third pour in a
          slow, circular motion until you reach 175 grams.
        </ArticleCardListText>

        <ArticleCardListH4>STEP 8</ArticleCardListH4>
        <ArticleCardListText>
          When the water is at the coffee grounds again, continue with your
          final pour in a slow, circular motion until you reach 225 grams.{" "}
        </ArticleCardListText>
        <ArticleCardListH4>STEP 9</ArticleCardListH4>
        <ArticleCardListText>
          When the timer reaches about 3:30 - 4 minutes, you're ready to enjoy.
          Remove the coffee filter, grab your favorite mug, and enjoy!
        </ArticleCardListText>

        <strong>PRO TIP:</strong>
        <ArticleCardListText>
          If you aren't hitting your brew times, you'll need to adjust your
          grind size. Coarser = faster brewing. Finer = slower brewing.
        </ArticleCardListText>
      </ArticleCardListDiv>
    </TutorialsArticleDiv>
  );
};

export default TutorialsB03;
