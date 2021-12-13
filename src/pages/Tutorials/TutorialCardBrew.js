import { Link } from "react-router-dom";
import {
  CardListDiv,
  CardListImg,
  CardListH3,
  CardListText,
} from "./components/TutorialsComponents";

const TutorialCardBrew = ({ src }) => {
  return (
    <>
      <CardListDiv>
        <Link to="/tutorials/brew/b01">
          <CardListImg
            src={
              "https://cdn.shopify.com/s/files/1/0035/9372/files/kalita_blog_photo.png?v=1607372057"
            }
          />
          <CardListH3>
            How to brew at home:Chemex / Hario V60 / Kalita Wave
          </CardListH3>
          <CardListText>
            Verve Coffee Pro, Kat Natividad, shows us how she brews coffee at
            home using the Kalita Wave. This flat-bottom pourover brewing device
            is what we use in all our cafes.
          </CardListText>
        </Link>
      </CardListDiv>

      <CardListDiv>
        <Link to="/tutorials/brew/b02">
          <CardListImg
            src={
              "https://cdn.shopify.com/s/files/1/0035/9372/files/aeropress-header.png?v=1610751389"
            }
          />
          <CardListH3>HOW TO BREW AT HOME (OR ON THE GO): AEROPRESS</CardListH3>
          <CardListText>
            Verve Coffee Pro, Soloman, shows us how he brews coffee with the
            portable AeroPress coffee brewer. This&nbsp;brewer is the perfect
            way to brew espresso-style coffee while on the go, or in the
            comforts of your own home.&nbsp;
          </CardListText>
        </Link>
      </CardListDiv>

      <CardListDiv>
        <Link to="/tutorials/brew/b03">
          <CardListImg
            src={
              "https://cdn.shopify.com/s/files/1/0035/9372/files/chemex_hero_module.jpg?v=1597780910"
            }
          />
          <CardListH3>How To Brew At Home: Chemex</CardListH3>
          <CardListText>
            Learn how to brew delicious coffee at home. We're featuring the
            Chemex in our step-by-step guide.
          </CardListText>
        </Link>
      </CardListDiv>
    </>
  );
};

export default TutorialCardBrew;
