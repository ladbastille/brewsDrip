import { Link } from "react-router-dom";
import {
  CardListDiv,
  CardListImg,
  CardListH3,
  CardListText,
} from "./components/TutorialsStyledComponents";

const TutorialCardCulture = ({ src }) => {
  return (
    <>
      <CardListDiv>
        <Link to="/tutorials/culture/c01">
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
        <Link to="/tutorials/culture/c02">
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
