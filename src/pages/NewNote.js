import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import "firebase/firestore";
import "firebase/storage";
import styled from "styled-components";
import {
  FaCameraRetro,
  FaArrowLeft,
  FaPlus,
  FaRegHeart,
  FaHeart,
} from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useLocation, Link } from "react-router-dom";
import Input, { HeaderH1 } from "../components/Input";
import Dropdown from "../components/Dropdown";
import { SubmitButton } from "../components/Signin";
import { FooterCTABtn } from "../components/Footer";
import { ImgWrap } from "./TasteNote";

const BREW_OPTIONS = [
  {
    value: "espressoBased",
    label: "Espresso Based",
  },
  {
    value: "aeroPress",
    label: "Aero Press",
  },
  {
    value: "pourOver",
    label: "Pour Over",
  },
  {
    value: "other",
    label: "Other",
  },
];

const NewNoteContainer = styled.div`
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

  & ::placeholder {
    color: #001a3a;
    opacity: 0.5;
    text-align: center;
  }

  & input:focus {
    background: #ffffff;
  }
`;

const InsideNotelistWrap = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  width: ${(props) => (props.width ? props.width : "100%")};
  justify-content: space-between;
`;

const SecondWrap = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  margin: ${(props) => (props.margin ? props.margin : "20px 0")};
  width: ${(props) => (props.width ? props.width : "70%")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : ""};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "")};
`;

export const PreviewImage = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const DropdownWrap = styled.div`
  font-family: "Open Sans Condensed", sans-serif;
  background-color: #fbd850;
  border-radius: 10px;
  overflow: hidden;
  width: ${(props) => (props.width ? props.width : "50%")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3px;
  position: relative;
  & input {
    background-color: #ffffff;
  }
`;

const TasteInput = styled(Input)`
  width: 65%;
  align-content: center;
  margin: 2% 3%;
  padding: 5px 10px;
  font-family: Poppins, Arial, Helvetica, sans-serif;
`;

export const HeaderH2 = styled(HeaderH1)`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.2rem")};
  margin: ${(props) => (props.margin ? props.margin : "2% auto")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
`;

const UploadLabel = styled.label`
  background-color: #fbd850;
  border: 1px solid #ffffff;
  margin: 4px 3px 3px 3px;
  padding: 6px 8px;
  width: ${(props) => (props.width ? props.width : "70%")};
  border-radius: 10px;
  text-align: center;
`;
const NoteTextarea = styled.textarea`
  border: transparent;
  border-radius: 10px;
`;

const NewNote = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [coffeeName, setCoffeeName] = useState("");
  const [notes, setNotes] = useState("");
  const [place, setPlace] = useState();
  const [rating, setRating] = useState();
  const [brewMethod, setBrewMethod] = useState("");
  const [tags, setTags] = useState([]);
  const [file, setFile] = React.useState(null);
  const [timerUsed, setTimerUsed] = useState("");

  const checkSetNum = (e) => {
    const value = parseInt(e.target.value.replace(/\D/g, ""));
    // console.log(e);
    console.log("[onChange:]", e.target.name);
    console.log("[value is:]", value);
    setRating(value);
  };

  // useEffect(() => {
  //   firebase
  //     .firestore()
  //     .collection("taste-note")
  //     .get()
  //     .then((collectionSnapshot) => {
  //       const data = collectionSnapshot.docs.map((doc) => {
  //         return doc.data();
  //       });
  //       setNotes(data);
  //     });
  // }, []);

  const previewUrl = file
    ? URL.createObjectURL(file)
    : "https://react.semantic-ui.com/images/wireframe/image.png";

  function createNewNote() {
    setIsLoading(true);
    const documentRef = firebase.firestore().collection("taste-note").doc();
    const fileRef = firebase.storage().ref("taste-pics/" + documentRef.id);
    const metadata = {
      contentType: file?.type || "",
    };
    fileRef.put(file, metadata).then(() => {
      fileRef.getDownloadURL().then((imageUrl) => {
        let dataObj = {
          coffeeName: coffeeName || "Unnamed Note",
          brewMethod: brewMethod || null,
          notes: notes || null,
          rating: parseInt(rating) || null,
          place: place,
          createdAt: firebase.firestore.Timestamp.now(),
          author: {
            displayName: firebase.auth().currentUser.displayName || "",
            photoURL: firebase.auth().currentUser.photoURL || "",
            uid: firebase.auth().currentUser.uid,
            email: firebase.auth().currentUser.email,
          },
          imageUrl: imageUrl || "",
        };
        console.log(dataObj);
        documentRef.set(dataObj).then(() => {
          setIsLoading(false);
          setNotes("");
          history.push("/tastenotelist");
        });
      });
    });
  }

  return (
    <>
      <NewNoteContainer>
        <FaArrowLeft size={"1.5rem"} style={{ alignSelf: "flex-start" }} />
        <HeaderH1 marginbottom={"10px"}>Create New Note</HeaderH1>
        <InsideNotelistWrap>
          <SecondWrap flexDirection={"column"}>
            <InsideNotelistWrap>
              <HeaderH2>Drink</HeaderH2>
              <TasteInput
                placeholder="- ENTER DRINK -"
                value={coffeeName}
                onChange={(e) => setCoffeeName(e.target.value)}
              />
            </InsideNotelistWrap>
            <InsideNotelistWrap>
              <HeaderH2>Place</HeaderH2>
              <TasteInput
                placeholder="- ENTER PLACE -"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
              />
            </InsideNotelistWrap>
          </SecondWrap>
          <SecondWrap
            width={"25%"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            margin={"0"}
          >
            <HeaderH2>Photo</HeaderH2>
            <UploadLabel>
              +&ensp;
              <FaCameraRetro />
              <TasteInput
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              ></TasteInput>
            </UploadLabel>
          </SecondWrap>
        </InsideNotelistWrap>
        <ImgWrap>
          <PreviewImage src={previewUrl} />
        </ImgWrap>

        <InsideNotelistWrap flexDirection={"column"}>
          <HeaderH2 margin={"2% auto 2% 0"}>Note</HeaderH2>
          <NoteTextarea
            cols="3"
            rows="ˋ"
            placeholder="- ENTER NOTES HERE -"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></NoteTextarea>
        </InsideNotelistWrap>

        <InsideNotelistWrap>
          <SecondWrap>
            <DropdownWrap width={"70%"}>
              <HeaderH2>Brew Method</HeaderH2>
              <Dropdown
                value={brewMethod}
                setValue={setBrewMethod}
                options={BREW_OPTIONS}
                placeholder="- Select Method -"
              />
            </DropdownWrap>
          </SecondWrap>

          <SecondWrap justifyContent={"space-between"}>
            <HeaderH2>Rating</HeaderH2>
            <TasteInput
              type="number"
              width={"55%"}
              min="0"
              step="1"
              max="5"
              value={rating}
              onChange={(e) => checkSetNum(e)}
              placeholder="- Enter Rating (OPTIONAL) -"
            />
          </SecondWrap>
        </InsideNotelistWrap>

        <SecondWrap justifyContent={"center"}>
          <FooterCTABtn
            width={"120px"}
            color={"#00B790"}
            onClick={createNewNote}
          >
            Save
          </FooterCTABtn>
          {/* <FooterCTABtn width={"50px"} color={"#FF5741"} onClick={resetInput}>
            Reset
          </FooterCTABtn> */}
        </SecondWrap>
      </NewNoteContainer>
    </>
  );
};

export default NewNote;
