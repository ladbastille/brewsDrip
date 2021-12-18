import { Link } from "react-router-dom";
import {
  CardListDiv,
  CardListImg,
  CardListH3,
  CardListText,
} from "./components/TutorialsStyledComponents";

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
