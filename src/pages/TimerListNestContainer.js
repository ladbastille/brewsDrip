import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import "firebase/firestore";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import { FaArrowLeft, FaRegHeart, FaHeart, FaEdit } from "react-icons/fa";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { AiFillSetting } from "react-icons/ai";

import { HeaderH1 } from "../components/Input";
import { HeaderH2 } from "./NewTimer";
import { StyledIconBtn } from "../components/Timer";
import Header from "../components/Header";

const TimerListContainer = styled.div`
  font-family: "Open Sans Condensed", sans-serif;
  background-color: #001a3a;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480 px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* & ::placeholder {
    color: #001a3a;
    opacity: 0.5;
    text-align: center;
  }

  & input:focus {
    background: #ffffff;
  } */
`;

export const StyledTimerlistLink = styled(Link)`
  font-family: "Open Sans Condensed", sans-serif;
  background-color: ${(props) =>
    props.background ? props.background : "#FBD850"};
  color: #ffffff;
  /* margin: 4px 3px 3px 3px; */
  margin: 4% auto;
  border-radius: 10px;
  border: 6px solid transparent;
  padding: ${(props) => (props.padding ? props.padding : "10px 20px")};
  width: ${(props) => (props.width ? props.width : "50%")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  &:hover {
    border: 6px solid #de6932;
  }
`;

export const BigTimerlistLink = styled.div`
  font-family: "Open Sans Condensed", sans-serif;
  background-color: ${(props) =>
    props.background ? props.background : "#FBD850"};
  color: #ffffff;
  /* margin: 4px 3px 3px 3px; */
  margin: 4% auto;
  border-radius: 10px;
  border: 6px solid transparent;
  padding: ${(props) => (props.padding ? props.padding : "10px 20px")};
  width: ${(props) => (props.width ? props.width : "50%")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  &:hover {
    border: 6px solid #de6932;
  }
  padding: 16px 20px;
  display: flex;
  flex-direction: row;
  margin: 1% auto;
  width: 85%;
`;

export const InsideTimerlistWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : "90%")};
  align-items: flex-end;
  justify-content: space-around;
`;

const TimersTagWrap = styled.div`
display:flex;
flex-wrap: wrap;
width:100%;
justify-content: space-between;
border-radius:10px;

`

const TimersTag =styled(Link)`
  background-color:#de6932;
  opacity: 0.6;
  font-weight: bold;
  font-size: 1.3rem;
  text-align: center;
  border-radius:50px;
  padding:.4rem .75rem;
  margin: 0;
  margin-bottom: ${(props)=>(props.marginBottom?props.marginBottom:"0")};
  color:${(props)=>(props.color?props.color:"#000000")};
  &:hover{
    background-color:#de6932;
    opacity:1;
  }
  @media (min-width:768px){
    padding:1.2rem 2.25rem;
    font-size:1.8rem;
  }

  @media (min-width:768px){
    padding:1.5rem 2.8rem;
    font-size:2rem;
  }
  `

const TimerListNestContainer = ({ user }) => {
  // const [timers, setTimers] = useState([]);
  // const location = useLocation();
  // const urlSearchParams = new URLSearchParams(location.search);
  // const currentTimer = urlSearchParams.get("timers");
  // const [activeTag, setActive] = useState("first");

  // const lastPostSnapshotRef = React.useRef();

  // useEffect(() => {
  //   firebase
  //     .firestore()
  //     .collection("timers")
  //     //   .doc()
  //     .orderBy("createdAt", "desc")
  //     // .get()
  //     // .then((collectionSnapshot) => {
  //     .onSnapshot((collectionSnapshot) => {
  //       const data = collectionSnapshot.docs.map((docSnapshot) => {
  //         const id = docSnapshot.id;
  //         return { ...docSnapshot.data(), id };
  //       });
  //       lastPostSnapshotRef.current =
  //         collectionSnapshot.docs[collectionSnapshot.docs.length - 1];
  //       setTimers(data);
  //       console.log(data);
  //     });
  // }, []);

  // function toggleLikeCollect(activeInField, field, id) {
  //   const uid = firebase.auth().currentUser?.uid;
  //   if (uid) {
  //     firebase
  //       .firestore()
  //       .collection("timers")
  //       .doc(id)
  //       .update({
  //         [field]: activeInField
  //           ? firebase.firestore.FieldValue.arrayRemove(uid)
  //           : firebase.firestore.FieldValue.arrayUnion(uid),
  //       });
  //   }
  // }

  // const isCollected = timers.collectedBy?.includes(
  //   firebase.auth().currentUser.uid
  // );

  // const isLiked = timers.likedBy?.includes(firebase.auth().currentUser.uid);
  // const currentUserId = firebase.auth().currentUser?.uid;
  // console.log(isLiked);
  // console.log(timers);
  return (
    <>
      {/* <Link to="/newtimer"><button>Create Timer</button></Link>
      <div>
        {timers.map((timer) => {
          return <h3 key={timer.id}>Timer ID: {timer.id}</h3>;
        })}
      </div> */}
      <TimerListContainer>
        
        {/* <HeaderH1 marginBottom={"3%"} color={"#FFFFFF"}>
          All Timers
        </HeaderH1> */}

        
        {/* here: render timers */}

        {/* {timers.map((timer) => {
          const isLiked = timer.likedBy?.includes(
            firebase.auth().currentUser?.uid
          );
          const isCollected = timer.collectedBy?.includes(
    firebase.auth().currentUser.uid
  );
          console.log(isLiked);
          return (
            <BigTimerlistLink
              key={timer.id}
              background={timer.baseColor.value}
              color={"#000000"}
            >
              <InsideTimerlistWrap as={Link} to={`/timerlist/${timer.id}`}>
                <HeaderH2 margin={"1.5% auto 2% 1.5%"} fontSize={"1.8rem"}>
                  {timer.timerName}
                </HeaderH2>
                <HeaderH2
                  margin={"1.5% auto 2% 1.5%"}
                  fontSize={"1.6rem"}
                  color={"#ffffff"}
                >
                  {`Steps at ${timer.customSec} secs`}
                </HeaderH2>
              </InsideTimerlistWrap>
              <InsideTimerlistWrap width={"10%"}>
                <StyledIconBtn>
                  {!isLiked ? (
                    <FaRegHeart
                      color={"white"}
                      size={"1.5rem"}
                      onClick={() => toggleLikeCollect(isLiked, "likedBy",timer.id)}
                    />
                  ) : (
                    <FaHeart
                      color={"white"}
                      size={"1.5rem"}
                      onClick={() => toggleLikeCollect(isLiked, "likedBy",timer.id)}
                    />
                  )}
                <span>&thinsp;{timer.likedBy?.length || 0}</span>
                </StyledIconBtn>
                <StyledIconBtn>
                  {!isCollected ? (
                    <IoBookmarkOutline
                      size={"1.5rem"}
                      onClick={() =>
                        toggleLikeCollect(isCollected, "collectedBy",timer.id)
                      }
                    />
                  ) : (
                    <IoBookmark
                      size={"1.5rem"}
                      onClick={() =>
                        toggleLikeCollect(isCollected, "collectedBy",timer.id)
                      }
                    />
                  )}
                <span>&thinsp;{timer.collectedBy?.length || 0}</span>
                </StyledIconBtn>
                {/* <StyledIconBtn>{<FaEdit size={"1.5rem"} />}</StyledIconBtn> */}
              {/* </InsideTimerlistWrap>
            </BigTimerlistLink>
          );
        })} */}

      </TimerListContainer>
    </>
  );
};

export default TimerListNestContainer;