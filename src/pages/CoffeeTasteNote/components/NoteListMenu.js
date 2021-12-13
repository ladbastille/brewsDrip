import {
  HeaderH1,
  HeaderH2,
  StyledTimerlistLink,
} from "../../../components/SubElements";
import { NotesTagWrap, NotesTag } from "./NoteComponents";

function NoteListMenu() {
  return (
    <>
      <HeaderH1 margintop={"20px"} color={"#ffffff"}>
        Taste Note
      </HeaderH1>
      <StyledTimerlistLink
        to="/newnote"
        background={"#B4CFCB"}
        color={"#FFFFFF"}
      >
        <HeaderH2 color={"#FFFFFF"}>+ NEW NOTE</HeaderH2>
      </StyledTimerlistLink>
      <NotesTagWrap>
        <NotesTag to="/tastenotelist" marginbottom={"3%"} color={"#FFFFFF"}>
          All
        </NotesTag>

        <NotesTag
          to="/tastenotelist/collected"
          marginbottom={"3%"}
          color={"#FFFFFF"}
        >
          Collections
        </NotesTag>
        <NotesTag
          to="/tastenotelist/mynotes"
          marginbottom={"3%"}
          color={"#FFFFFF"}
        >
          My Notes
        </NotesTag>
      </NotesTagWrap>
    </>
  );
}

export default NoteListMenu;
