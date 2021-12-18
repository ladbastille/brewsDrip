import { HeaderH2, TasteInput } from "../../../components/SubElements";
import { ThirdWrap, SecondWrap } from "../../../components/ContainerAndWrap";

const renderDrinkAndPlace = (
  coffeeName,
  setCoffeeName,
  readOnly,
  place,
  setPlace
) => {
  return (
    <SecondWrap width={"50%"} flexDirection={"column"}>
      <ThirdWrap>
        <HeaderH2>Drink</HeaderH2>
        <TasteInput
          placeholder="- ENTER DRINK -"
          value={coffeeName}
          onChange={(e) => setCoffeeName(e.target.value)}
          readOnly={readOnly}
        />
      </ThirdWrap>
      <ThirdWrap>
        <HeaderH2>Place</HeaderH2>
        <TasteInput
          placeholder="- ENTER PLACE -"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          readOnly={readOnly}
        />
      </ThirdWrap>
    </SecondWrap>
  );
};

export default renderDrinkAndPlace;
