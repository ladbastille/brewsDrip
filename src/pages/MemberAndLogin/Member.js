import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import ReactLoading from "react-loading";
import { BiTimer, BiNotepad } from "react-icons/bi";
import { SubmitButton } from "./components/Signin";
import {
  HeaderH1,
  HeaderH2,
  ImgWrap,
  SimplePreviewImage,
} from "../../components/SubElements";
import { userLogout, getUserPhotoRef } from "../../utils/firebase";

const MemberDiv = styled.div`
  font-family: "Poppins", sans-serif;
  background: #ffb75e;
  background: -webkit-linear-gradient(to right, #ed8f03, #ffb75e);
  background: linear-gradient(to right, #ed8f03, #ffb75e);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  margin-bottom: 20px;
  margin-top: 10px;
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;
  max-width: 768px;
  min-height: 65vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #001a3a;
  transition: transform 0.6s ease-in-out;
  transform: ${(props) =>
    props.active ? ` translateX(50%)` : `translateX(0)`};

  @media (max-width: 768px) {
    flex-direction: column;
    align-content: center;
    padding-bottom: 30px;
    min-height: 55vh;
  }
  @media (max-width: 375px) {
    min-height: 450px;
  }
`;

const ProfileCardDiv = styled.div`
  position: relative;
  width: 50%;
  min-height: 40vh;
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  flex-direction: ${(props) => props.flexDirection};
  @media (max-width: 768px) {
    min-height: 20vh;
  }
  @media (max-width: 375px) {
    .welcome-title {
      font-size: 1.35rem;
      margin: 15px auto 15px;
    }
  }
`;

const CardBtnDiv = styled.div`
  display: flex;
  width: 100%;
  margin: 10px auto;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
  @media (max-width: 768px) {
    justify-content: space-evenly;
  }
`;

const ConfirmBtnDiv = styled(CardBtnDiv)`
  position: absolute;
  margin-top: 250px;
  align-self: ${(props) => props.alignSelf};
  @media (max-width: 768px) {
    margin-top: 100px;
  }
  @media (max-width: 375px) {
    margin-top: 70px;
  }
`;

const MemberPageButton = styled(SubmitButton)`
  background-color: ${(props) => props.backgroundColor};
  padding: ${(props) => (props.padding ? props.padding : "3px 8px")};
  border-radius: 50px;
  border: none;
`;

const ChangePhotoLabel = styled.label`
  padding: 4px 10px;
  border-radius: 50px;
  border: 1px solid #ffb75e;
  cursor: pointer;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  margin-top: 10px;
`;
const ConfirmChangePhoto = styled(ChangePhotoLabel)`
  margin: 5px;
  background: ${(props) => props.background};
`;

const ProfileImage = styled(SimplePreviewImage)`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
  @media (max-width: 375px) {
    width: 100px;
    height: 100px;
  }
`;

const ProfileImgWrap = styled(ImgWrap)`
  margin-bottom: 10px;
  padding-right: 0;
`;

const LogoutButton = styled(SubmitButton)`
  position: absolute;
  bottom: 12%;
  @media (max-width: 768px) {
    bottom: 8%;
  }
  @media (max-width: 768px) {
    bottom: 20px;
  }
`;

function Member() {
  const currentUser = useSelector((state) => state.currentUser);
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const history = useHistory();
  const defaultUserPhotoUrl =
    "https://firebasestorage.googleapis.com/v0/b/brewsdrip.appspot.com/o/user-pics%2FdefaultUser.png?alt=media&token=7e5e71c8-aabb-4bdd-a55c-72ec3659b41d";

  const previewUrl = () => {
    if (file) {
      return URL.createObjectURL(file);
    } else if (currentUser.photoURL !== null) {
      return currentUser.photoURL;
    } else {
      return defaultUserPhotoUrl;
    }
  };

  const toLogOut = () => {
    setIsLoading(true);
    userLogout();
    history.push("/login");
    setIsLoading(false);
  };

  function onSubmit() {
    setIsLoading(true);
    const fileRef = getUserPhotoRef("user-photos/", currentUser);
    const metadata = {
      contentType: file?.type,
    };
    fileRef.put(file, metadata).then(() => {
      fileRef.getDownloadURL().then((imageUrl) => {
        currentUser
          .updateProfile({
            photoURL: imageUrl,
          })
          .then(() => {
            setIsLoading(false);
            setFile(null);
          });
      });
    });
  }

  return (
    <>
      {currentUser && (
        <MemberDiv>
          <ProfileCardDiv flexDirection={"column"}>
            <ProfileImgWrap width={"200px"}>
              <ProfileImage src={previewUrl()} />
            </ProfileImgWrap>
            <ChangePhotoLabel>
              Change photo
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              ></input>
            </ChangePhotoLabel>
            {file && (
              <>
                <ConfirmBtnDiv justifyContent={"center"}>
                  <ConfirmChangePhoto background={"#de6932"} onClick={onSubmit}>
                    Confirm
                  </ConfirmChangePhoto>
                  <ConfirmChangePhoto onClick={() => setFile(null)}>
                    Nope
                  </ConfirmChangePhoto>
                </ConfirmBtnDiv>
              </>
            )}
          </ProfileCardDiv>
          <ProfileCardDiv
            flexDirection={"column"}
            justifyContent={"space-evenly"}
          >
            <HeaderH1
              className="welcome-title"
              fontSize={"2rem"}
              color={"#FFFFFF"}
              marginbottom={"20px"}
              margintop={"20px"}
            >
              Welcome Back!
            </HeaderH1>

            <HeaderH2 margin={"5px auto 1%;"}>{currentUser.email}</HeaderH2>

            <CardBtnDiv justifyContent={"center"}>
              <MemberPageButton backgroundColor={"#fbd850"}>
                <Link to="/timerlist/mytimers">
                  <BiTimer size={"2rem"} color={"#ffffff"} />
                </Link>
              </MemberPageButton>
              <HeaderH2 margin={"2% 20px 1% 5px;"} color={"#ffffff"}>
                My Timers
              </HeaderH2>
              <MemberPageButton backgroundColor={"#00B790"}>
                <Link to="/tastenotelist/mynotes">
                  <BiNotepad size={"2rem"} color={"#ffffff"} />
                </Link>
              </MemberPageButton>
              <HeaderH2 margin={"2% 20px 1% 5px;"} color={"#ffffff"}>
                My Notes
              </HeaderH2>
            </CardBtnDiv>
          </ProfileCardDiv>
          <LogoutButton onClick={toLogOut}>Logout</LogoutButton>

          {isLoading ? (
            <ReactLoading color="#FBD850" type="spinningBubbles" />
          ) : (
            <></>
          )}
        </MemberDiv>
      )}
    </>
  );
}

export default Member;
