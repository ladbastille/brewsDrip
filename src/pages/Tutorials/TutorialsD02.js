import {
  TutorialsArticleDiv,
  ArticleCardListDiv,
  ArticleCardListH3,
  ArticleCardListText,
  FlexRowDiv,
  ArticleCardListImg,
  ArticleCardListH4,
  ArticleCardListH5,
} from "./components/TutorialsComponents";

const TutorialsD02 = () => {
  return (
    <>
      <TutorialsArticleDiv>
        <ArticleCardListDiv>
          <ArticleCardListH3>
            HOLIDAY DRINK HIGHLIGHT: THE CAFÉ DE OLLA CON PANNA
          </ArticleCardListH3>
          <ArticleCardListImg
            src={
              "https://cdn.shopify.com/s/files/1/0035/9372/files/de_olla_blog_header_f8469d10-4a7f-4fc8-a698-dbdea50d8a8b.png?v=1606252138"
            }
          />
          <ArticleCardListText>
            This year, we decided to build our holiday signature beverage menu
            through an open call to our very talented baristas to submit drink
            recipes for the holidays. We should have anticipated how difficult
            it would be to narrow down from all of the amazing submissions we
            received, but we certainly had fun in the process. It’s a tough job
            tasting all this coffee, but someone’s gotta do it ;)
          </ArticleCardListText>
          <ArticleCardListText>
            A stand-out recipe came from Alejandro Catalan, a barista from our
            Mateo café in Los Angeles. He proposed the Café de Olla con Panna, a
            shot of espresso sweetened with spiced piloncillo syrup and topped
            with cinnamon whipped cream. His recipe is at the top of our
            signature holiday beverage menu this year, so we wanted to hear more
            from Alejandro about his inspiration for the beverage...
          </ArticleCardListText>
          <ArticleCardListH4 style={{ color: "#DE6932" }}>
            Q: What was your inspiration for this drink?
          </ArticleCardListH4>
          <ArticleCardListText>
            A: Café de olla is a staple served at Latino breakfasts here in LA,
            and I thought it’d be great to see it represented at Verve. It is
            made with ground coffee, piloncillo (aka panela), cinnamon sticks,
            and other spices like anis. In Mexico, it's traditionally made in
            clay pots on an open fire and served in jarritos, but here in LA, we
            throw it together on a stovetop, and most of the time the recipe is
            just thrown together from memory or feel. What I find particularly
            engaging about café de olla is its history. During the Mexican
            Revolution, Adelitas (women soldiers) fought together with the men
            and also served them. Café de olla was given to soldiers in the
            morning to sustain their energy and vitality throughout the day.
          </ArticleCardListText>
          <FlexRowDiv>
            <ArticleCardListImg
              width={"48%"}
              src={
                "https://cdn.shopify.com/s/files/1/0035/9372/files/Alejandro.png?v=1606246231"
              }
            />
            <ArticleCardListImg
              width={"48%"}
              src={
                "https://cdn.shopify.com/s/files/1/0035/9372/files/de_olla_drink.png?v=1606246283"
              }
            />
          </FlexRowDiv>
          <FlexRowDiv>
            <ArticleCardListH5 marginbottom={"20px"}>
              Alejandro Catalan
            </ArticleCardListH5>
            <ArticleCardListH5 mmarginbottom={"20px"}>
              The Café de Olla con Panna
            </ArticleCardListH5>
          </FlexRowDiv>
          <ArticleCardListH4 style={{ color: "#DE6932" }}>
            Q: Does your family have a recipe for café de olla?
          </ArticleCardListH4>
          <ArticleCardListText>
            A: Not really, I’ll ask my mom, “how did you make it?” and she’ll
            say “oh, a pinch of this and a pinch of that,” and I’m like “ok how
            much is a pinch for you?” I’ll try to get her to tell me if it’s in
            ounces or grams, but she’ll say “no it's just a pinch, you take a
            guess.” I’ve seen my grandmother make it. She’ll just buy the
            ingredients, and then visually go by pinches and handfuls. She makes
            it on the stovetop, puts in a bunch of cinnamon sticks, throws in
            some chocolates, anise, and piloncillo, lets it all dissolve, and
            then tastes it. Then she throws in ground coffee, boils it for a
            while, and filters it through a mesh.
          </ArticleCardListText>
          <ArticleCardListH4 style={{ color: "#DE6932" }}>
            Q: How did you develop your recipe?
          </ArticleCardListH4>
          <ArticleCardListText>
            A: I wanted to make it unique and different for Verve, so the first
            thing I considered was how to pair it with espresso. What if I made
            an espresso con panna with a café de olla twist? So I threw around
            some ideas that I had with the kitchen staff at Mateo, brought them
            cinnamon and piloncillo, and gave them directions on what I’d like
            to do. We came up with a concentrate that’s an incredible syrup, and
            a whipped cream that has the spice components of traditional café de
            olla. Combined with the espresso, it is sweet, energetic, and
            fragrant--, you smell it and want to devour the whole thing
            instantly.
          </ArticleCardListText>

          <ArticleCardListText>
            Thank you, Alejandro, for sharing your recipe with us - we are so
            excited to feature it on our menu this holiday season!
            <br />
            <br />
            Try Café de Olla today...
          </ArticleCardListText>
        </ArticleCardListDiv>
      </TutorialsArticleDiv>
    </>
  );
};

export default TutorialsD02;
