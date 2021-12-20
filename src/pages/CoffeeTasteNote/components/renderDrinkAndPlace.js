import { TasteInput, NoteTitle } from "../../../components/SubElements";
import { ThirdWrap, SecondWrap } from "../../../components/ContainerAndWrap";

const renderDrinkAndPlace = (
  coffeeName,
  setCoffeeName,
  readOnly,
  place,
  setPlace
) => {
  return (
    <SecondWrap margin={"20px 0 0"} width={"50%"} flexDirection={"column"}>
      <ThirdWrap>
        <NoteTitle>Drink</NoteTitle>
        <TasteInput
          placeholder="- ENTER DRINK -"
          value={coffeeName}
          onChange={(e) => setCoffeeName(e.target.value)}
          readOnly={readOnly}
        />
      </ThirdWrap>
      <ThirdWrap>
        <NoteTitle>Place</NoteTitle>
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
