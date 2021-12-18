import { FaCameraRetro } from "react-icons/fa";
import { PreviewImage, ImgWrap } from "../../../components/SubElements";
import { UploadLabel } from "./NoteStyledComponents";
import { SecondWrap } from "../../../components/ContainerAndWrap";

const renderPhoto = (
  readOnly,
  isPhoto,
  handleChoosePhoto,
  note,
  previewUrl,
  defaultNoteImg
) => {
  return (
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
        ) : null}
        {note ? (
          note.imageUrl && readOnly ? (
            <PreviewImage src={isPhoto ? previewUrl : note.imageUrl} />
          ) : readOnly && !isPhoto ? (
            <PreviewImage src={defaultNoteImg} />
          ) : (
            <PreviewImage src={isPhoto ? previewUrl : ""} />
          )
        ) : null}
      </ImgWrap>
    </SecondWrap>
  );
};

export default renderPhoto;
