import React,{useState,useEffect} from 'react';
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import firebase from '../utils/firebase';
import "firebase/firestore";
import { TimerListContainer,StyledTimerlistLink,TimersTagWrap,TimersTag,BigTimerlistLink,InsideTimerlistWrap } from './AllTimerList';
import { FaArrowLeft, FaRegHeart, FaHeart, FaEdit } from "react-icons/fa";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { TiDeleteOutline,TiDelete } from "react-icons/ti";
import { FiDelete } from "react-icons/fi";
import { RiDeleteBack2Fill } from "react-icons/ri";

import { HeaderH1 } from "../components/Input";
import { HeaderH2 } from "./NewTimer";
import { StyledIconDiv } from "../components/Timer";
import Header from "../components/Header";

export const EditIconDiv = styled(StyledIconDiv)`
  position:absolute;
  background:#D42927;
  border-radius: 50px;
  padding: 3px;
  top:0;
  right:0;
  margin:-18px -20px 0 0;
  display:none;
`

function MyTimers({user}) {
  const [timers, setTimers] = useState([]);


  useEffect(() => {
  
    console.log(user)

    if(user){
    firebase
      .firestore()
      .collection('timers')
      .where('author.uid', '==', firebase.auth().currentUser.uid)
      .orderBy("createdAt", "desc")
      // .get()
      // .then((collectionSnapshot) => {
      .onSnapshot((collectionSnapshot) => {
        const data = collectionSnapshot.docs.map((docSnapshot) => {
          const id = docSnapshot.id;
          return { ...docSnapshot.data(), id };
        });
        setTimers(data);
      });}  
  }, [user]);

  function toggleLikeCollect(activeInField, field, id) {
    const uid = firebase.auth().currentUser?.uid;
    if (uid) {
      firebase
        .firestore()
        .collection("timers")
        .doc(id)
        .update({
          [field]: activeInField
            ? firebase.firestore.FieldValue.arrayRemove(uid)
            : firebase.firestore.FieldValue.arrayUnion(uid),
        });
    }
  }

  const isCollected = timers.collectedBy?.includes(
    firebase.auth().currentUser.uid
  );
  const isLiked = timers.likedBy?.includes(firebase.auth().currentUser.uid);
  const currentUserId = firebase.auth().currentUser?.uid;

  function handleDeleteTimer(timerid){
    firebase
      .firestore()
      .collection("timers")
      .doc(timerid)
      .delete()
  }

  return (
    <>
     
        <HeaderH1 marginbottom={"3%"} color={"#FFFFFF"}>
          My Timers
        </HeaderH1>
        {/* here: render timers */}

        {timers.map((timer) => {
          const isLiked = timer.likedBy?.includes(
            firebase.auth().currentUser?.uid
          );
          const isCollected = timer.collectedBy?.includes(
    firebase.auth().currentUser.uid
  );
          console.log('isLiked:'+ isLiked);
          return (
            <BigTimerlistLink
              key={timer.id}
              background={timer.baseColor.value}
              color={"#000000"}
            >
              <InsideTimerlistWrap as={Link} to={`/timer/${timer.id}`}>
                <HeaderH2 margin={"1.5% auto 2% 1.5%"} fontSize={"1.8rem"}>
                  {timer.timerName}
                </HeaderH2>
                <HeaderH2
                  margin={"1.5% auto 2% 1.5%"}
                  fontSize={"1.4rem"}
                  color={"#ffffff"}
                >
                  {`Steps at ${timer.customSec} secs`}
                </HeaderH2>
              </InsideTimerlistWrap>
              <InsideTimerlistWrap width={"15%"}>
                <StyledIconDiv>
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
                </StyledIconDiv>
                <StyledIconDiv>
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
                </StyledIconDiv>
                
              </InsideTimerlistWrap>
              <EditIconDiv onClick={(e)=>{handleDeleteTimer(timer.id)}}>{<RiDeleteBack2Fill size={"1.5rem"} />}</EditIconDiv>
            </BigTimerlistLink>
          );
        })}

    </>
  );
}

export default MyTimers;
