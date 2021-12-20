import { Link } from "react-router-dom";
import BREW from "../../images/BREW.jpg";
import DRINK from "../../images/DRINK.jpg";
import CULTURE from "../../images/CULTURE.jpg";
import {
  TutorialsDiv,
  CardDiv,
  CategoryImg,
  CategoryH2,
} from "./components/TutorialsStyledComponents";

const TutorialsIndex = () => {
  return (
    <TutorialsDiv>
      <Link to="/tutorials/brew">
        <CardDiv>
          <CategoryH2>BREW</CategoryH2>
          <CategoryImg src={BREW} alt="brewImg" />
        </CardDiv>
      </Link>

      <Link to="/tutorials/drink">
        <CardDiv>
          <CategoryH2>DRINK</CategoryH2>
          <CategoryImg src={DRINK} alt="drinkImg" />
        </CardDiv>
      </Link>

      <Link to="/tutorials/culture">
        <CardDiv>
          <CategoryH2>CULTURE</CategoryH2>
          <CategoryImg src={CULTURE} alt="cultureImg" />
        </CardDiv>
      </Link>
    </TutorialsDiv>
  );
};

export default TutorialsIndex;
