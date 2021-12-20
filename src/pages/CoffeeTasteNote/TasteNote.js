import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";
import ReactLoading from "react-loading";
import { GiCoffeeBeans } from "react-icons/gi";
import { HeaderH1, HeaderH2, centerStyle } from "../../components/SubElements";
import Tags from "./components/Tags";
import {
  NewNoteContainer,
  InsideNotelistWrap,
  SecondWrap,
  RatingDiv,
  Flex100BetweenWrap,
} from "../../components/ContainerAndWrap";
import {
  NoteTextarea,
  EditBtn,
  FlexCenterWrap,
} from "./components/NoteStyledComponents";
import { getDoc, getDocOnSnapShot, getFileRef } from "../../utils/firebase";
import renderDrinkAndPlace from "./components/renderDrinkAndPlace";
import renderPhoto from "./components/renderPhoto";
import renderShare from "./components/renderShare";

function TasteNote() {
  const currentUser = useSelector((state) => state.currentUser);
  const [isShareClick, setIsShareClick] = useState(false);
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
        Swal.fire("Success!", "You've edited this tastenote!", "success");
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
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    Swal.fire("Go share now!", "You've copied the URL!", "success");
    setIsShareClick((prev) => !prev);
  };

  const onShareWindowClose = () => {
    Swal.fire("Awesome!", "Let's share this note!", "success");
    setIsShareClick((prev) => !prev);
  };

  function handleChoosePhoto(e) {
    setFile(e.target.files[0]);
    setIsPhoto(true);
  }

  return (
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
        {renderDrinkAndPlace(
          coffeeName,
          setCoffeeName,
          readOnly,
          place,
          setPlace
        )}

        {renderPhoto(
          readOnly,
          isPhoto,
          handleChoosePhoto,
          note,
          previewUrl,
          defaultNoteImg
        )}
      </InsideNotelistWrap>

      <InsideNotelistWrap width={"90%"} flexDirection={"column"}>
        <HeaderH2 margin={"15px auto 2% 0"}>Note</HeaderH2>
        <NoteTextarea
          cols="3"
          rows="3"
          placeholder="- ENTER NOTES HERE -"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          readOnly={readOnly}
        ></NoteTextarea>
      </InsideNotelistWrap>
      <SecondWrap
        flexWrap={"wrap"}
        alignItems={"center"}
        margin={"15px auto 5px auto"}
        width={"90%"}
      >
        <HeaderH2 margin={"0 20px 1% 0"}>Rating</HeaderH2>
        {[...Array(5)].map((star, index) => {
          const ratingValue = (index += 1);
          return (
            <RatingDiv key={uuidv4()} readOnly={readOnly}>
              <label readOnly={readOnly}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
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

      <Tags
        editable={!readOnly}
        selectedTagIds={selectedTagIds}
        setSelectedTagIds={setSelectedTagIds}
      />
      <FlexCenterWrap alighItems={"center"} position={"relative"} margin={"6%"}>
        {currentUser?.uid === note?.author.uid ? (
          readOnly ? (
            <EditBtn color={"#FF5741"} onClick={toggleEditable}>
              Edit
            </EditBtn>
          ) : (
            <>
              <EditBtn color={"#00B790"} onClick={toggleSaveData}>
                Save
              </EditBtn>
              {isLoading && (
                <div style={centerStyle}>
                  <ReactLoading color="#FBD850" type="spinningBubbles" />
                </div>
              )}
            </>
          )
        ) : null}
        {renderShare(
          isShareClick,
          setIsShareClick,
          onShareWindowClose,
          handleCopyUrl
        )}
      </FlexCenterWrap>
    </NewNoteContainer>
  );
}

export default TasteNote;
