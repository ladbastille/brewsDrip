import {
  TutorialsArticleDiv,
  ArticleCardListDiv,
  ArticleCardListH3,
  ArticleCardListText,
  FlexRowDiv,
  ArticleCardListImg,
  ArticleCultureCardListH4,
  ArticleCardListH5,
} from "./components/TutorialsStyledComponents";

const TutorialsD01 = () => {
  return (
    <TutorialsArticleDiv>
      <ArticleCardListDiv>
        <ArticleCardListH3>
          COFFEE AND WINE: YOUR TWO FAVORITE BEVERAGES HAVE MORE IN COMMON THAN
          YOU MIGHT THINK
        </ArticleCardListH3>

        <ArticleCardListImg
          src={
            "https://cdn.shopify.com/s/files/1/0035/9372/files/winc_header.png?v=1624899409"
          }
        />
        <ArticleCardListText>
          We are partnering with Winc this Summer to offer discounts and
          giveaways on coffee and wine.
        </ArticleCardListText>
        <ArticleCardListText>
          While many wine-drinkers are familiar with the nuances and
          complexities of wine, many people are only just now exploring the
          different varieties and region- and process-specific influences that
          impact the way coffee tastes. Beyond the fact that both coffee and
          wine are made from fruit, there are countless commonalities between
          two of the world’s favorite beverages -- including everything from how
          we taste to flavor profiles to the importance of terroir.
        </ArticleCardListText>
        <ArticleCardListText>
          We sat down with our co-founder Colby Barr and Winc’s winemaker Bobby
          Daugherty to discuss the similarities between coffee and wine, common
          flavor profiles, and tips for how to select and taste both of these
          beloved beverages at home like a pro.
        </ArticleCardListText>

        <FlexRowDiv>
          <ArticleCardListImg
            width={"48%"}
            src={
              "https://cdn.shopify.com/s/files/1/0035/9372/files/colby_winc.png?v=1624926882"
            }
          />
          <ArticleCardListImg
            width={"48%"}
            src={
              "https://cdn.shopify.com/s/files/1/0035/9372/files/bobby_winc.png?v=1624926911"
            }
          />
        </FlexRowDiv>
        <FlexRowDiv>
          <ArticleCardListH5 marginbottom={"20px"}>
            Colby Barr
          </ArticleCardListH5>
          <ArticleCardListH5 mmarginbottom={"20px"}>
            Bobby Daugherty
          </ArticleCardListH5>
        </FlexRowDiv>

        <ArticleCultureCardListH4 color={"#DE6932"}>
          What are the big similarities between growing coffee fruit and growing
          grapes for wine?
        </ArticleCultureCardListH4>
        <ArticleCardListH5 margintop={"10px"}>Colby Barr: </ArticleCardListH5>
        <ArticleCardListText>
          Growing up in a family that farmed wine grapes in Northern California,
          I’ve often talked about this with my father who studied viticulture at
          UC Davis. Wine grapes and coffee have a lot in common!
        </ArticleCardListText>
        <ArticleCardListText>
          Beyond the importance of the region, the farmers themselves are
          incredibly important. You need a farmer who is passionate about what
          they do and who truly loves farming -- there is no substitute for
          this. They will take care of the plants every day and ensure the
          highest quality. They’ll also decide the critical moment of harvest.
          In coffee, like wine, it is critical yet subjective when to harvest
          and is always a balance of sugar and acidity.
        </ArticleCardListText>
        <ArticleCardListText>
          Finally, there’s the processing of the fruit -- like wine, coffee
          processing involves fermentation, though not to produce alcohol.
          Fermentation does have a huge impact on the final coffee’s taste and
          there are many ways to approach this depending on the producer’s
          preferences and styles.
        </ArticleCardListText>
        <ArticleCultureCardListH4 margintop={"10px"}>
          Bobby Daugherty:{" "}
        </ArticleCultureCardListH4>
        <ArticleCardListText>
          As Colby mentioned, one of the biggest similarities is the incredible
          diversity of beans and grapes. Not only do both have seemingly endless
          varieties, they have multiplicity in the way in which they are
          processed. The result is an inexhaustible range of flavors and styles.
        </ArticleCardListText>
        <FlexRowDiv>
          <ArticleCardListImg
            width={"48%"}
            src={
              "https://cdn.shopify.com/s/files/1/0035/9372/files/harvest_coffee.png?v=1624915416"
            }
          />
          <ArticleCardListImg
            width={"48%"}
            src={
              "https://cdn.shopify.com/s/files/1/0035/9372/files/harvest_wine.png?v=1624915278"
            }
          />
        </FlexRowDiv>
        <FlexRowDiv>
          <ArticleCardListH5 marginbottom={"20px"}>
            Coffee cherries picked during peak season.
          </ArticleCardListH5>
          <ArticleCardListH5 mmarginbottom={"20px"}>
            The almighty wine grape during harvest.
          </ArticleCardListH5>
        </FlexRowDiv>

        <ArticleCultureCardListH4 color={"#DE6932"}>
          Bobby, how has learning about coffee has helped you in your career as
          a wine expert?
        </ArticleCultureCardListH4>
        <ArticleCardListText>
          BD: Both beverages require a measured approach to production and
          analysis. There is a kinship there, though the flavor compounds and
          methods are very different. Coffee, to me, is a reminder of what we
          do: create satisfying experiences for people to enjoy.
        </ArticleCardListText>

        <ArticleCultureCardListH4 color={"#DE6932"}>
          What parallels do you see between coffee and wine from a tasting
          perspective?
        </ArticleCultureCardListH4>
        <ArticleCardListText>
          CB: Funny enough, the original coffee tasting wheel was inspired by
          wine’s aroma wheel that was created at UC Davis in the 1980s. The idea
          was to create a common language that could be used by tasters to
          describe coffee’s complex flavors. On top of that, the Specialty
          Coffee Association recently partnered with UC Davis to create an
          updated tasting wheel to hone this even further.
        </ArticleCardListText>
        <ArticleCardListText>
          When tasting coffees, you may hear descriptors of different types of
          stone fruits, aromatics of perhaps basil, maybe a sparkling
          minerality, a silky mouthfeel with a complex and lingering finish, and
          always the descriptions of sweetness, acidity and clarity. Even though
          there are lexicons and “norms”, tasting is ultimately a subjective
          endeavor and like wine, people will like and dislike individually
          whether it is because of the cultivar, the region, or the approach of
          the winemaker or coffeemaker themselves.
        </ArticleCardListText>

        <ArticleCultureCardListH4 color={"#DE6932"}>
          Speaking of tasting, what are the steps one should take when wine
          tasting at home?
        </ArticleCultureCardListH4>
        <ArticleCardListText>
          BD: The most important step is comfort. If your objective is to enjoy
          the wine, that is the only requirement. If a more serious tasting is
          your ambition, make sure the environment is free of aromas, you have
          clean and proper glassware, and a pen and paper to document your
          findings.
        </ArticleCardListText>
        <ArticleCultureCardListH4 color={"#DE6932"}>
          What are the steps one should take when choosing coffee beans to brew
          at home?
        </ArticleCultureCardListH4>
        <ArticleCardListText>
          CB: The most important thing you can do is buy high quality coffee.
          That may seem obvious, but there is a lot of terrible coffee out there
          and you can’t improve coffee once it is picked. It’s really important
          to buy coffee from roasters that work directly with producers and that
          focus on quality. Next, you have to learn what you like. If you have a
          favorite cafe, talk to the baristas! If you buy online, don’t hesitate
          to call or send a quick note to the roaster asking for their opinion.
          Tell them what you normally like and don’t like and then start
          exploring the space.
        </ArticleCardListText>
        <ArticleCardListText>
          We at Verve roast lighter than many coffee companies because we want
          you to taste the intrinsic qualities of the coffee and not overwhelm
          and smother those unique, desirable qualities in roast. That said, we
          do have a range of roast profiles and coffee types to choose from -
          you may like balance and chocolate or you may like fruit-forward, the
          options are really endless.
        </ArticleCardListText>

        <ArticleCultureCardListH4 color={"#DE6932"}>
          Colby, what’s your favorite coffee offered on Verve right now and
          Bobby, what’s your favorite wine available on Winc?
        </ArticleCultureCardListH4>
        <ArticleCardListText>
          CB: This is a tough one! Of our blends, which are available
          year-round, my favorite is probably The 1950. It’s one of our lighter
          blends and made up of high elevation Ethiopian coffees — which by the
          way, is the birthplace of all coffee on Earth. It has a brown sugar
          sweetness paired with a lime and nectarine vibrancy, and has a complex
          and lasting finish. I call it our crossover coffee because it sits
          right between the rest of our blends and our single origins. If you
          want more balance and a bit more roast, head deeper into our blends.
          If you want a bit more uniqueness and pop then jump up into our Single
          Origins, which are limited and come and go with inventory.
        </ArticleCardListText>
        <ArticleCardListText>
          BD: Our 2020 Debts & Lessons Riesling. The grapes were grown in
          stone-strewn vineyards in Monterey County that yield flavors of green
          apple, citrus, wet stone, and tea. On the palate, a crisp acidity and
          balancing sugar provide a lengthy wine that both novice and veteran
          drinkers can share and enjoy.
        </ArticleCardListText>

        <ArticleCultureCardListH4 color={"#DE6932"}>
          Colby, what is your favorite type of wine?
        </ArticleCultureCardListH4>
        <ArticleCardListText>
          CB: I actually like my wines like my coffee. Clarity of flavor is most
          important to me and then a sliding balance of acidity and sweetness. I
          love minerality, though I don't always have to have it. I'm not really
          into anything drying (in coffee that is a big no-no) and have moved
          away from the weightier wines but can appreciate them on occasion. I
          do like natural wines and am also drawn toward the lower sugar/alcohol
          movement. So with all of that, maybe Bobby and the Winc team can tell
          me exactly what I would like! ;)
        </ArticleCardListText>

        <ArticleCultureCardListH4 color={"#DE6932"}>
          Bobby, how do you like your coffee and do you have any favorite types
          of coffee?
        </ArticleCultureCardListH4>
        <ArticleCardListText>
          BD: I prefer my coffee black. This helps to discern the aromas and
          flavors without distraction. I’m especially fond of a mid-afternoon
          espresso.
        </ArticleCardListText>

        <ArticleCardListImg
          src={
            "https://cdn.shopify.com/s/files/1/0035/9372/files/coffeeandwine.png?v=1625250729"
          }
        />
        <ArticleCultureCardListH4 color={"#DE6932"}>
          What’s your favorite word or term used to describe wine and coffee,
          respectively?
        </ArticleCultureCardListH4>
        <ArticleCardListText>
          BD: “Sexy.” It’s seldomly used by winemakers, but describes a red wine
          that is easy to drink, elegant, with velvety tannins and pretty aromas
          like flowers and fresh fruit.{" "}
        </ArticleCardListText>

        <ArticleCardListText>
          CB: ”Complexity.” To me this is the bonus point for any coffee.
          Complex flavors in coffee typically come from the very highest grown
          coffees which are what we are seeking in many of our best coffees.
        </ArticleCardListText>
      </ArticleCardListDiv>
    </TutorialsArticleDiv>
  );
};

export default TutorialsD01;
