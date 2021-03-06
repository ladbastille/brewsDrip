import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import Compressor from "compressorjs";
import ReactLoading from "react-loading";
import Swal from "sweetalert2";
import { FaCameraRetro, FaArrowLeft } from "react-icons/fa";
import { GiCoffeeBeans } from "react-icons/gi";
import {
  Input,
  HeaderH1,
  HeaderH2,
  SimplePreviewImage,
  ImgWrap,
  CTABtn,
} from "../../components/SubElements";
import {
  Flex100BetweenWrap,
  SecondWrap,
  RatingDiv,
} from "../../components/ContainerAndWrap";
import Tags from "./components/Tags";
import { getDocumentRef, getFileRef, getCreatedAt } from "../../utils/firebase";
import { UploadLabel } from "./components/NoteStyledComponents";
import { centerStyle } from "../../components/SubElements";

const NewNoteContainer = styled.div`
  font-family: "Open Sans Condensed", sans-serif;
  background-color: #b4cfcb;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  position: relative;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 10px;
  box-sizing: border-box;

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
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "space-between"};
`;

const TasteInput = styled(Input)`
  width: 65%;
  align-content: center;
  margin: 2% 3%;
  padding: 5px 10px;
  display: ${(props) => props.display};
`;

const NoteTextarea = styled.textarea`
  border: transparent;
  border-radius: 10px;
`;

const NewNotePreviewImage = styled(SimplePreviewImage)`
  margin: 0 auto;
`;

const NewNote = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const history = useHistory();
  const [coffeeName, setCoffeeName] = useState("");
  const [notes, setNotes] = useState("");
  const [place, setPlace] = useState("");
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [file, setFile] = useState(null);
  const [selectedTagIds, setSelectedTagIds] = useState([]);
  const [isLoading, setIsLoading] = useState();

  const previewUrl = file
    ? URL.createObjectURL(file)
    : "https://react.semantic-ui.com/images/wireframe/image.png";

  const handleCompressedUpload = (e) => {
    const image = e.target.files[0];
    new Compressor(image, {
      quality: 0.2,
      convertSize: 1000000,
      success: (res) => {
        setFile(res);
      },
    });
  };

  function createNewNote() {
    const documentRef = getDocumentRef("taste-note");
    const fileRef = getFileRef("taste-pics/", documentRef);
    const metadata = {
      contentType: file?.type || "",
    };
    setIsLoading(true);
    fileRef.put(file, metadata).then(() => {
      fileRef.getDownloadURL().then((imageUrl) => {
        let dataObj = {
          coffeeName: coffeeName,
          notes: notes || "",
          rating: parseInt(rating) || null,
          selectedTagIds: selectedTagIds || [],
          place: place || "Unnamed Place",
          createdAt: getCreatedAt(),
          author: {
            displayName: currentUser.displayName || "",
            photoURL: currentUser.photoURL || "",
            uid: currentUser.uid,
            email: currentUser.email,
          },
          imageUrl: file ? imageUrl : "",
        };
        if (!coffeeName) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter drink name.",
          });
          setIsLoading(false);
          return;
        }
        documentRef.set(dataObj).then(() => {
          Swal.fire("Awesome!", "You've created a tastenote!", "success");
          setIsLoading(false);
          setFile(null);
          history.push("/tastenotelist");
        });
      });
    });
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
              onChange={(e) => handleCompressedUpload(e)}
              display={"none"}
            ></TasteInput>
          </UploadLabel>
        </SecondWrap>
      </InsideNotelistWrap>
      <InsideNotelistWrap justifyContent={"center"}>
        <ImgWrap paddingRight={"0"}>
          <NewNotePreviewImage src={previewUrl} />
        </ImgWrap>
      </InsideNotelistWrap>

      <InsideNotelistWrap flexDirection={"column"}>
        <HeaderH2 margin={"2% auto 2% 0"}>Note</HeaderH2>
        <NoteTextarea
          cols="3"
          rows="3"
          placeholder="- ENTER NOTES HERE -"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></NoteTextarea>
      </InsideNotelistWrap>
      <SecondWrap margin={"10px auto 5px 0"} width={"100%"}>
        <HeaderH2 height={"42px"} margin={"2% 10px 1% 0"}>
          Rating
        </HeaderH2>

        {[...Array(5)].map((star, index) => {
          const ratingValue = (index += 1);
          return (
            <RatingDiv key={uuidv4()}>
              <label>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <GiCoffeeBeans
                  color={
                    ratingValue <= (hover || rating) ? "#fbd850" : "#e5e5e5"
                  }
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                  size={25}
                  className="star"
                />
              </label>
            </RatingDiv>
          );
        })}
      </SecondWrap>

      <Tags
        selectedTagIds={selectedTagIds}
        setSelectedTagIds={setSelectedTagIds}
      />

      <SecondWrap
        position={"relative"}
        margin={"5px auto 5px "}
        justifyContent={"center"}
      >
        <CTABtn
          width={"120px"}
          color={"#00B790"}
          onClick={createNewNote}
          marginRight={"0"}
        >
          Save
        </CTABtn>
        {isLoading && (
          <div style={centerStyle}>
            <ReactLoading color="#FBD850" type="spinningBubbles" />
          </div>
        )}
      </SecondWrap>
    </NewNoteContainer>
  );
};

export default NewNote;
