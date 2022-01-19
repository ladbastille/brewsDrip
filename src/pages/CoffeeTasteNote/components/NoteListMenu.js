import { useSelector } from "react-redux";
import {
  HeaderH1,
  HeaderH2,
  StyledTimerlistLink,
} from "../../../components/SubElements";
import { handleLoginModal } from "../../../utils/swals";
import { NotesTagWrap, NotesTag } from "./NoteStyledComponents";

function NoteListMenu() {
  const currentUser = useSelector((state) => state.currentUser);
  const uid = currentUser?.uid;
  return (
    <>
      <HeaderH1 margintop={"20px"} color={"#ffffff"}>
        Taste Note
      </HeaderH1>
      <StyledTimerlistLink
        to="/newnote"
        background={"#B4CFCB"}
        color={"#FFFFFF"}
        onClick={(e) => handleLoginModal(e, uid, "create new note.")}
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
          onClick={(e) =>
            handleLoginModal(e, uid, "see your collections.")
          }
        >
          Collections
        </NotesTag>
        <NotesTag
          to="/tastenotelist/mynotes"
          marginbottom={"3%"}
          color={"#FFFFFF"}
          onClick={(e) => handleLoginModal(e, uid, "see your notes.")}
        >
          My Notes
        </NotesTag>
      </NotesTagWrap>
    </>
  );
}

export default NoteListMenu;
