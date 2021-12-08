import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getDoc, getDocOnSnapShot, getFileRef } from "../utils/firebase";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import {
  FacebookShareButton,
  LineShareButton,
  FacebookIcon,
  LineIcon,
} from "react-share";
import { FaCameraRetro, FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { GiCoffeeBeans } from "react-icons/gi";
import { FiShare2 } from "react-icons/fi";
import { BiLinkAlt } from "react-icons/bi";
import { HeaderH1, TasteInput } from "../components/Input";
import { FooterCTABtn } from "../components/Footer";
import { ImgWrap, UploadLabel } from "./NewNote";
import Tags from "./Tags";
import {
  NewNoteContainer,
  InsideNotelistWrap,
  ThirdWrap,
  SecondWrap,
  RatingDiv,
  Flex100BetweenWrap,
  Flex90BetweenWrap,
  StyledIconDiv,
  ShareBtnDiv,
} from "../components/ContainerAndWrap";

export const PreviewImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  margin-right: 40px;
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

function TasteNote() {
  const currentUser = useSelector((state) => state.currentUser);
  const [isShareClick, setIsShareClick] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const [readOnly, setReadOnly] = useState(true);
  const [coffeeName, setCoffeeName] = useState("");
  const [place, setPlace] = useState("");
  const [rating, setRating] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [hover, setHover] = useState(null);
  const [selectedTagIds, setSelectedTagIds] = useState([]);
  const [notes, setNotes] = useState("");
  const { noteId } = useParams();
  const [note, setNote] = useState(null);
  const [file, setFile] = useState(null);
  const [isPhoto, setIsPhoto] = useState(false);
  const previewUrl = file ? URL.createObjectURL(file) : "";
  const defaultNoteImg =
    "https://firebasestorage.googleapis.com/v0/b/brewsdrip.appspot.com/o/taste-pics%2Fno-image-picture.png?alt=media&token=d9f52508-ba2c-4c90-8f80-48b688cdaf76";
  const handleSetData = (data) => {
    setNote(data);
    setNotes(data.notes);
    setCoffeeName(data.coffeeName);
    setPlace(data.place);
    setRating(data.rating);
    setSelectedTagIds(data.selectedTagIds ? data.selectedTagIds : []);
  };
  useEffect(() => {
    const unsub = getDocOnSnapShot("taste-note", noteId, handleSetData);
    return unsub;
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    const documentRef = getDoc("taste-note", noteId);
    const fileRef = getFileRef("taste-pics/", documentRef);
    const metadata = {
      contentType: file?.type,
    };

    let dataObj = {
      coffeeName: coffeeName,
      notes: notes,
      rating: parseInt(rating),
      selectedTagIds: selectedTagIds,
      place: place,
      imageUrl: note.imageUrl,
    };

    if (!dataObj.coffeeName) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter drink name.",
      });
      return;
    }
    const handleUpdateData = (dataObj) => {
      documentRef.update(dataObj).then(() => {
        setIsLoading(false);
        setFile(null);
        setIsPhoto(false);
        setReadOnly(true);
      });
    };

    file
      ? fileRef.put(file, metadata).then(() => {
          fileRef.getDownloadURL().then((imageUrl) => {
            dataObj.imageUrl = imageUrl;
            handleUpdateData(dataObj);
          });
        })
      : handleUpdateData(dataObj);

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

  function handleChoosePhoto(e) {
    setFile(e.target.files[0]);
    setIsPhoto(true);
  }

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
              {!readOnly && !isPhoto ? (
                <UploadLabel readOnly={readOnly}>
                  <input
                    type="file"
                    onChange={(e) => handleChoosePhoto(e)}
                    style={{ display: "none" }}
                  />
                  +&ensp;
                  <FaCameraRetro />
                </UploadLabel>
              ) : (
                <></>
              )}
              {note ? (
                note.imageUrl && readOnly ? (
                  <PreviewImage src={isPhoto ? previewUrl : note.imageUrl} />
                ) : readOnly && !isPhoto ? (
                  <PreviewImage src={defaultNoteImg} />
                ) : (
                  <PreviewImage src={isPhoto ? previewUrl : ""} />
                )
              ) : (
                <></>
              )}
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
        <SecondWrap
          flexWrap={"wrap"}
          margin={"10px auto 5px auto"}
          width={"90%"}
        >
          <HeaderH2 margin={"2% 10px 1% 0"}>Rating</HeaderH2>
          {[...Array(5)].map((star, index) => {
            const ratingValue = (index += 1);
            return (
              <RatingDiv key={uuidv4()} readOnly={readOnly}>
                <label readOnly={readOnly}>
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    key={index}
                    onClick={readOnly ? () => {} : () => setRating(ratingValue)}
                    readOnly={readOnly}
                  />
                  <GiCoffeeBeans
                    color={ratingValue <= rating ? "#fbd850" : "#e5e5e5"}
                    onMouseEnter={readOnly ? () => {} : () => setHover(index)}
                    onMouseLeave={readOnly ? () => {} : () => setHover(rating)}
                    size={25}
                    className="star"
                  />
                </label>
              </RatingDiv>
            );
          })}
        </SecondWrap>
        <InsideNotelistWrap></InsideNotelistWrap>
        <SecondWrap
          margin={"5px auto 5px "}
          justifyContent={"center"}
        ></SecondWrap>
        <Tags
          editable={!readOnly}
          selectedTagIds={selectedTagIds}
          setSelectedTagIds={setSelectedTagIds}
        />
        <FlexCenterWrap margin={"6%"}>
          {currentUser?.uid === note?.author.uid ? (
            readOnly ? (
              <EditBtn color={"#FF5741"} onClick={toggleEditable}>
                Edit
              </EditBtn>
            ) : (
              <EditBtn color={"#00B790"} onClick={toggleSaveData}>
                Save
              </EditBtn>
            )
          ) : (
            <></>
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
