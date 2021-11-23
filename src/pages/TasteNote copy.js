import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import "firebase/firestore";
import "firebase/storage";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { FaArrowLeft, FaRegHeart, FaHeart } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useLocation, Link } from "react-router-dom";
import Input, { HeaderH1 } from "../components/Input";
import { HeaderH2 } from "./NewTimer";
import { SubmitButton } from "../components/Signin";
import { FooterCTABtn } from "../components/Footer";
import { PreviewImage } from "../pages/NewNote";

const NoteContainer = styled.div`
  font-family: "Open Sans Condensed", sans-serif;
  background-color: #b4cfcb;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  position: relative;
  /* overflow: hidden; */
  /* width: 7px; */
  max-width: 100%;
  min-height: 480px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & span {
    background: #ffffff;
    padding: 10px 20px;
    border-radius: 10px;
    margin-left: 10px;
    margin-right: 5px;
  }

  & input:focus {
    background: #ffffff;
  }
`;

const FlexWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 25px;
  justify-content: center;

  button {
    margin: 2px;
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    background: #fbd850;
  }
`;

export const ImgWrap = styled.div`
  width: 160px;
  height: auto;
`;

const TitleH2 = styled(HeaderH2)`
  margin: "0px 10px";
`;

function TasteNote() {
  const [file, setFile] = useState(null);
  const previewUrl = file
    ? URL.createObjectURL(file)
    : "https://react.semantic-ui.com/images/wireframe/image.png";

  const { noteId } = useParams();
  const [note, setNote] = useState({
    author: {},
  });

  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    firebase
      .firestore()
      .collection("taste-note")
      .doc(noteId)
      .onSnapshot((docSnapshot) => {
        const data = docSnapshot.data();
        setNote(data);
        console.log(data);
      });
    //   .get()
    //   .then((docSnapshot) => {
    //     const data = docSnapshot.data();
    //     setPost(data);
    //   });
  }, []);

  return (
    <>
      <NoteContainer>
        <HeaderH1>TasteNotes</HeaderH1>
        <FlexWrap>
          <TitleH2>Drink</TitleH2>
          <span>{note.coffeeName}</span>
          <TitleH2>Place</TitleH2>
          <span>{note.place}</span>
        </FlexWrap>

        {/* <FlexWrap>
          <TitleH2>Rating</TitleH2>
          <span>{note.rating ? note.rating : "none"}</span>
          <TitleH2>Tags</TitleH2>
          <span>Chill, Sweet, Creamy, vibing</span>
        </FlexWrap> */}
        <FlexWrap>
          <TitleH2>Photo</TitleH2>
          <ImgWrap>
            <img src={note.imageUrl} style={{ maxWidth: "100%" }}></img>
          </ImgWrap>
        </FlexWrap>
        <FlexWrap>
          <TitleH2>Notes</TitleH2>
          <span>{note.notes ? note.notes : "none"}</span>
        </FlexWrap>
        <FlexWrap>
          <button>EDIT</button>
          <button>SHARE</button>
        </FlexWrap>
      </NoteContainer>
    </>
  );
}

export default TasteNote;
