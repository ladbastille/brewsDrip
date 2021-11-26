import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import "firebase/firestore";
import "firebase/storage";
import styled from "styled-components";
import {
  FaArrowLeft,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Input, { HeaderH1 } from "../components/Input";
import { FooterCTABtn } from "../components/Footer";
import {
  Flex100BetweenWrap,
  Flex90BetweenWrap,
  StyledIconDiv,
  ShareBtnDiv,
} from "./Timer";
import { GiCoffeeBeans } from "react-icons/gi";
import { FiShare2 } from "react-icons/fi";
import { BiLinkAlt } from "react-icons/bi";
import { ImgWrap } from "./NewNote";
import Tags from "./Tags";
import {
  FacebookShareButton,
  LineShareButton,
  FacebookIcon,
  LineIcon,
} from "react-share";

const NewNoteContainer = styled.div`
  font-family: "Open Sans Condensed", sans-serif;
  background-color: #b4cfcb;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  position: relative;
  width: 768px;
  max-width: 95%;
  min-height: 480px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 10px;

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
  @media (max-width: 375px) {
    width: 95%;
  }
  & input:focus {
    background-color: #fbd850;
  }
`;
const ThirdWrap = styled(InsideNotelistWrap)`
  width: ${(props) => props.width};
  @media (max-width: 375px) {
    width: 55%;
  }
`;

const SecondWrap = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  margin: ${(props) => (props.margin ? props.margin : "20px 0")};
  width: ${(props) => (props.width ? props.width : "70%")};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

export const PreviewImage = styled.img`
  max-height: 100%;
  max-width: 100%;
`;


const TasteInput = styled(Input)`
  width: 65%;
  align-content: center;
  margin: 2% 3%;
  padding: 5px 10px;
  font-family: Poppins, Arial, Helvetica, sans-serif;
  background-color: ${(props) => (props.readOnly ? "#fbd850" : "#ffffff")};
  cursor: ${(props) => (props.readOnly ? "default" : "edit")};
`;

export const HeaderH2 = styled(HeaderH1)`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.2rem")};
  margin: ${(props) => (props.margin ? props.margin : "2% auto")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
`;

const NoteTextarea = styled.textarea`
  border: transparent;
  border-radius: 10px;
  text-align: center;
  background-color: ${(props) => (props.readOnly ? "#fbd850" : "#ffffff")};
  cursor: ${(props) => (props.readOnly ? "default" : "edit")};
`;

const RatingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px 10px;
  input[type="radio"] {
    display: none;
  }
  .star {
    cursor: pointer;
    transition: color 200ms;
  }
`;

const EditBtn = styled(FooterCTABtn)`
  border: transparent 2px solid;
  &:hover {
    color: #000000;
    transition: all 0.3s ease-out;
    background-color: ${(props) => props.color};
    border: #fff 2px solid;
  }
`;

const FlexCenterWrap = styled(Flex90BetweenWrap)`
  justify-content: center;
  ${EditBtn} {
    margin-top: 0px;
    margin-right: 20px;
  }
`;

function TasteNote({ user }) {
  const [isShareClick, setIsShareClick] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [readOnly, setReadOnly] = useState(true);
  const [coffeeName, setCoffeeName] = useState("");
  const [place, setPlace] = useState("");

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const [selectedTagIds, setSelectedTagIds] = useState([]);
  const [notes, setNotes] = useState("");
  const { noteId } = useParams();
  const [note, setNote] = useState({
    author: {},
  });


  useEffect(() => {
    firebase
      .firestore()
      .collection("taste-note")
      .doc(noteId)
      .onSnapshot((docSnapshot) => {
        const data = docSnapshot.data();
        setNote(data);
        setNotes(data.notes);
        setCoffeeName(data.coffeeName);
        setPlace(data.place);
        setRating(data.rating);
        setSelectedTagIds(data.selectedTagIds ? data.selectedTagIds : []);

      });
  }, []);

  const toggleEditable = () => {
    setReadOnly(false);
    Swal.fire({
      title: "You are now editing this tastenote.",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  const toggleSaveData = () => {
    setIsLoading(true);
    const documentRef = firebase
      .firestore()
      .collection("taste-note")
      .doc(noteId);

    let dataObj = {
      coffeeName: coffeeName,
      notes: notes,
      rating: parseInt(rating),
      selectedTagIds: selectedTagIds,
      place: place,
    };
    documentRef.update(dataObj).then(() => {
      setIsLoading(false);
      setReadOnly(true);
    });
    Swal.fire("Success!", "You've edited this tastenote!", "success");
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    Swal.fire("Go share now!", "You've copied the URL!", "success");
    setIsShareClick((prev) => !prev);
  };

  const onShareWindowClose = () => {
    Swal.fire("Awesome!", "Thank you for sharing this tastenote!", "success");
    setIsShareClick((prev) => !prev);
  };

  return (
    <>
      <NewNoteContainer>
        <Flex100BetweenWrap>
          <Link to="/tastenotelist">
            <FaArrowLeft
              color={"#000000"}
              size={"1.5rem"}
              style={{ alignSelf: "flex-start" }}
            />
          </Link>
        </Flex100BetweenWrap>
        <HeaderH1 marginbottom={"10px"}>Taste Note</HeaderH1>
        <InsideNotelistWrap width={"90%"}>
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
          <SecondWrap
            width={"25%"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            margin={"0"}
          >

            <ImgWrap>
              <PreviewImage src={note.imageUrl} />
            </ImgWrap>
          </SecondWrap>
        </InsideNotelistWrap>

        <InsideNotelistWrap width={"90%"} flexDirection={"column"}>
          <HeaderH2 margin={"2% auto 2% 0"}>Note</HeaderH2>
          <NoteTextarea
            cols="3"
            rows="3"
            placeholder="- ENTER NOTES HERE -"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            backgroundColor={"#fbd850"}
            readOnly={readOnly}
          ></NoteTextarea>
        </InsideNotelistWrap>
        <SecondWrap margin={"10px auto 5px auto"} width={"90%"}>
          <HeaderH2 margin={"2% 10px 1% 0"}>Rating</HeaderH2>
          {/* {const activeArr = ['a', 'c']}
              {['a', 'b', 'c'].map(tag => {
                const isActive = activeArr.includes(tag);
                return <Tag isActive={isActive} >{tag}</Tag>
              })} */}
          {[...Array(5)].map((star, index) => {
            const ratingValue = (index += 1);
            return (
              <RatingDiv>
                <label readOnly={readOnly}>
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    key={index}
                    onClick={() => setRating(ratingValue)}
                    readOnly={readOnly}
                  />
                  <GiCoffeeBeans
                    color={ratingValue <= rating ? "#fbd850" : "#e5e5e5"}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                    size={25}
                    className="star"
                  />
                </label>
              </RatingDiv>
            );
          })}

          <HeaderH2 margin={"2% 1px 1% auto"}>Date</HeaderH2>
          <HeaderH2 margin={"2% 5px 1% 3%"}>{`${note.createdAt
            ?.toDate()
            .toLocaleDateString()}`}</HeaderH2>
        </SecondWrap>
        <InsideNotelistWrap>
          
        </InsideNotelistWrap>

        <SecondWrap margin={"5px auto 5px "} justifyContent={"center"}>
          
        </SecondWrap>
        <Tags
          editable={!readOnly}
          selectedTagIds={selectedTagIds}
          setSelectedTagIds={setSelectedTagIds}
        />
        <FlexCenterWrap margin={"6%"}>
          {readOnly ? (
            <EditBtn color={"#FF5741"} onClick={toggleEditable}>
              Edit
            </EditBtn>
          ) : (
            <EditBtn color={"#00B790"} onClick={toggleSaveData}>
              Save
            </EditBtn>
          )}
          <StyledIconDiv>
            <FiShare2
              color={"white"}
              size={"1.5rem"}
              onClick={() => setIsShareClick((prev) => !prev)}
            />
            {isShareClick && (
              <ShareBtnDiv>
                <FacebookShareButton
                  url={window.location.href}
                  quote={"I've created a coffee tastenote. Take a look!"}
                  hashtag={["brewsDrip", "YourBestCoffeePal"]}
                  onShareWindowClose={onShareWindowClose}
                >
                  <FacebookIcon size={25} round />
                </FacebookShareButton>
                <LineShareButton
                  url={window.location.href}
                  title={"I've created a coffee tastenote. Take a look!"}
                  onShareWindowClose={onShareWindowClose}
                >
                  <LineIcon size={25} round />
                </LineShareButton>
                <BiLinkAlt
                  size={25}
                  color={"#FFFFFF"}
                  onClick={handleCopyUrl}
                />
              </ShareBtnDiv>
            )}
          </StyledIconDiv>
        </FlexCenterWrap>
      </NewNoteContainer>
    </>
  );
}
export default TasteNote;
