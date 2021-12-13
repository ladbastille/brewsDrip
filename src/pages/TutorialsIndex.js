import { Link } from "react-router-dom";
import BREW from "../images/BREW.jpg";
import DRINK from "../images/DRINK.jpg";
import CULTURE from "../images/CULTURE.jpg";
import {
  TutorialsDiv,
  CardDiv,
  CategoryImg,
  CategoryH2,
} from "../components/TutorialsComponents";

const TutorialsIndex = () => {
  return (
    <>
      <TutorialsDiv>
        <Link to="/tutorials/brew">
          <CardDiv>
            <CategoryH2>BREW</CategoryH2>
            <CategoryImg src={BREW} />
          </CardDiv>
        </Link>

        <Link to="/tutorials/drink">
          <CardDiv>
            <CategoryH2>DRINK</CategoryH2>
            <CategoryImg src={DRINK} />
          </CardDiv>
        </Link>

        <Link to="/tutorials/culture">
          <CardDiv>
            <CategoryH2>CULTURE</CategoryH2>
            <CategoryImg src={CULTURE} />
          </CardDiv>
        </Link>
      </TutorialsDiv>
    </>
  );
};

export default TutorialsIndex;
