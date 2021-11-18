import { useState } from "react";
import firebase from "../utils/firebase";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { OverlayDiv } from "../components/Overlay";
import { SubmitButton } from "../components/Signin";
import { ImgWrap, PreviewImage } from "./NewNote";
import { Flex100BetweenWrap } from "./Timer";
import { HeaderH2 } from "./TasteNote";
import Input, { HeaderH1 } from "../components/Input";
import timerLogo from "../images/logo-timer.svg";
import { BiTimer, BiNotepad } from "react-icons/bi";

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
  width: 768px;
  max-width: 95%;
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
  }
`;

const ProfileCardDiv = styled.div`
  width: 50%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  flex-direction: ${(props) => props.flexDirection};
  @media (max-width: 768px) {
    min-height: 20vh;
  }
  @media (max-width: 375px) {
    .welcome-title {
      font-size:1.5rem;
      margin:0 auto 10px;
    }
  }
`;

const CardBtnDiv = styled.div`
  display: flex;
  width: 100%;
  margin: 10px auto;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: space-evenly;
  }
`;

const MemberPageButton = styled(SubmitButton)`
  background-color: ${(props) => props.backgroundColor};
  padding: ${(props) => (props.padding ? props.padding : "3px 8px")};
  border-radius: 50px;
  border: none;
`;

const NameInput = styled(Input)`
  background: linear-gradient(to right, #ed8f03, #ffb75e);
  border: solid transparent 1px;
  font-size: 1.2rem;
  text-align: center;
`;

const ProfileImage = styled(PreviewImage)`
  border-radius: 50%;
`;

const ProfileImgWrap = styled(ImgWrap)``;

function Member({ user }) {
  const [isLoading, setIsLoading] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [file, setFile] = useState(null);

  const previewUrl = file
    ? user.photoURL
    : "https://react.semantic-ui.com/images/wireframe/image.png";
  // const previewUrl = file
  //   ? URL.createObjectURL(file)
  //   : "https://react.semantic-ui.com/images/wireframe/image.png";

  const history = useHistory();

  const toLogOut = () => {
    setIsLoading(true);
    firebase.auth().signOut();
    history.push("/login");
    setIsLoading(false);
  };

  console.log('[user]',user);

  return (
    <>
      {user && (
        <MemberDiv>
          <ProfileCardDiv>
            <ProfileImgWrap width={"200px"}>
              <ProfileImage src={user.photoURL} />
            </ProfileImgWrap>
          </ProfileCardDiv>
          <ProfileCardDiv flexDirection={"column"} alignItems={"flex-start"}>
            <div>
              <HeaderH1
                className="welcome-title"
                fontSize={"2rem"}
                color={"#FFFFFF"}
                marginbottom={"20px"}
                margintop={"10px"}
              >
                Welcome Back!
              </HeaderH1>

              <NameInput
                value={user.displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                readOnly
              ></NameInput>

              <HeaderH2 margin={"20px auto 1%;"}>{user.email}</HeaderH2>
            </div>
            <CardBtnDiv>
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
            <SubmitButton onClick={toLogOut}>Logout</SubmitButton>
          </ProfileCardDiv>

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
