import { useState } from "react";
import firebase from "../utils/firebase";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { OverlayDiv } from "../components/Overlay";

const MemberDiv = styled.div`
  background: #ffb75e;
  background: -webkit-linear-gradient(to right, #ed8f03, #ffb75e);
  background: linear-gradient(to right, #ed8f03, #ffb75e);
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #001a3a;
  transition: transform 0.6s ease-in-out;
  transform: ${(props) =>
    props.active ? ` translateX(50%)` : `translateX(0)`};
`;

function Member() {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const toLogOut = () => {
    setIsLoading(true);
    firebase.auth().signOut();
    history.push("/login");
    setIsLoading(false);
  };
  return (
    <>
      <MemberDiv>
        <h5>This is member page!</h5>
        <div>You've logged in.</div>
        <button onClick={toLogOut}>Logout</button>
        {isLoading ? (
          <ReactLoading color="#FBD850" type="spinningBubbles" />
        ) : (
          <></>
        )}
      </MemberDiv>
    </>
  );
}

export default Member;
