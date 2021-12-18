import {
  TutorialsArticleDiv,
  ArticleCardListDiv,
  ArticleCardListH3,
  ArticleCardListText,
  ArticleCardListImg,
  ArticleCardListH4,
} from "./components/TutorialsStyledComponents";

const TutorialsD01 = () => {
  return (
    <TutorialsArticleDiv>
      <ArticleCardListDiv>
        <ArticleCardListH3>
          HOLIDAY PARTY DRINK RECIPE: THE GOLDEN JEWEL
        </ArticleCardListH3>

        <ArticleCardListImg
          src={
            "https://cdn.shopify.com/s/files/1/0035/9372/files/hero.png?v=1573608420"
          }
        />
        <ArticleCardListText>
          There are two critical essentials of any great party; delicious drinks
          and choice music. Thankfully, we’re ticking off the first box right
          here with The Golden Jewel: the perfect holiday-inspired drink. We
          tapped Josh, our Signature Beverage Coordinator, to create a custom
          holiday drink recipe for Streetlevel Instant Craft Coffee transforms
          our classic coffee blend into a winter wonderland. This recipe is
          ultra-versatile and able to be enjoyed with or without alcohol. Relax,
          we’ve got the whole party covered.
        </ArticleCardListText>
        <ArticleCardListH4 color={"#DE6932"}>
          SYRUP INGREDIENT LIST [yields about 5 servings]
        </ArticleCardListH4>
        <ArticleCardListText>
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
        </ArticleCardListText>
        <ArticleCardListH4 color={"#DE6932"}>
          ADDITIONAL INGREDIENTS
        </ArticleCardListH4>
        <ArticleCardListText>
          Streetlevel Instant Craft Coffee
          <br />
          Sparkling Water
          <br />
          Ice
          <br />
          Chambord (optional)
          <br />
          Bourbon (optional)
        </ArticleCardListText>
        <ArticleCardListH4>STEP ONE </ArticleCardListH4>
        <ArticleCardListText>
          Combine all the syrup ingredients in a medium pot and bring to a boil.
          Reduce heat and simmer on low for 10 minutes.
        </ArticleCardListText>

        <ArticleCardListH4>STEP TWO</ArticleCardListH4>
        <ArticleCardListText>
          Strain the syrup into a glass container through a small mesh strainer
          and place it to the side to cool.
        </ArticleCardListText>

        <ArticleCardListH4>STEP THREE </ArticleCardListH4>
        <ArticleCardListText>
          Each drink will need half a packet of Instant Craft Coffee:
          Streetlevel. Pour the full contents of the packet into a mixing glass,
          adding 2 ounces of water then gently stirring to dissolve the coffee.
        </ArticleCardListText>

        <ArticleCardListImg
          src={
            "https://cdn.shopify.com/s/files/1/0035/9372/files/holiday_process.png?v=1573608446"
          }
        />

        <ArticleCardListH4>STEP FOUR</ArticleCardListH4>
        <ArticleCardListText>
          Fill a Collins glass with ice and add 1 ounce of the dissolved coffee.
        </ArticleCardListText>

        <ArticleCardListImg
          src={
            "https://cdn.shopify.com/s/files/1/0035/9372/files/holiday_process2.png?v=1573608472"
          }
        />

        <ArticleCardListH4>STEP FIVE</ArticleCardListH4>
        <ArticleCardListText>
          If going the alcoholic route, skip to step six. Fill the glass about
          two-thirds of the way with sparkling water then top off with 2 ounces
          of Jewel Syrup. Continue on to step seven.
        </ArticleCardListText>

        <ArticleCardListImg
          src={
            "https://cdn.shopify.com/s/files/1/0035/9372/files/holiday_sage.png?v=1573608505"
          }
        />

        <ArticleCardListH4>STEP SIX</ArticleCardListH4>
        <ArticleCardListText>
          If you’re here for the sauce, keep adding to your dissolved coffee and
          ice base with 2 ounces of Jewel Syrup, 1 ounce Chambord and 2 ounces
          Bourbon. Gently stir, then strain into a rocks glass over a large ice
          cube or sphere.
        </ArticleCardListText>

        <ArticleCardListH4>STEP SEVEN</ArticleCardListH4>
        <ArticleCardListText>
          Garnish with a fresh sage leaf.
        </ArticleCardListText>

        <ArticleCardListImg
          src={
            "https://cdn.shopify.com/s/files/1/0035/9372/files/holiday_josh.png?v=1573608526"
          }
        />
        <ArticleCardListText>
          Our Golden Jewel holiday drink recipe is best served as an
          after-dinner coffee cocktail.
        </ArticleCardListText>
      </ArticleCardListDiv>
    </TutorialsArticleDiv>
  );
};

export default TutorialsD01;
