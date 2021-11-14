import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import {
  TimerListContainer,
  StyledTimerlistLink,
  TimersTagWrap,
  TimersTag,
  BigTimerlistLink,
  InsideTimerlistWrap,
} from "./AllTimerList";
import "firebase/firestore";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import { FaArrowLeft, FaRegHeart, FaHeart, FaEdit } from "react-icons/fa";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { AiFillSetting } from "react-icons/ai";

import { HeaderH1 } from "../components/Input";
import { HeaderH2 } from "./NewTimer";
import { StyledIconDiv } from "../components/Timer";
import Header from "../components/Header";

const DefaultTimer = ({ user }) => {
  const [timers, setTimers] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("timers")
      .where("isDefault", "==", true)
    //   .orderBy("createdAt", "desc")
      .get()
      .then((collectionSnapshot) => {
        //   .onSnapshot((collectionSnapshot) => {
        const data = collectionSnapshot.docs.map((docSnapshot) => {
          const id = docSnapshot.id;
          return { ...docSnapshot.data(), id };
        });
        setTimers(data);
        console.log(data);
      });
  }, []);

  //   function toggleLikeCollect(activeInField, field, id) {
  //     const uid = firebase.auth().currentUser?.uid;
  //     if (uid) {
  //       firebase
  //         .firestore()
  //         .collection("timers")
  //         .doc(id)
  //         .update({
  //           [field]: activeInField
  //             ? firebase.firestore.FieldValue.arrayRemove(uid)
  //             : firebase.firestore.FieldValue.arrayUnion(uid),
  //         });
  //     }
  //   }

  //   const isCollected = timers.collectedBy?.includes(
  //     firebase.auth().currentUser.uid
  //   );

  //   const isLiked = timers.likedBy?.includes(firebase.auth().currentUser.uid);
  //   const currentUserId = firebase.auth().currentUser?.uid;
  //   // console.log(isLiked);
  console.log(timers);
  return (
    <>
      <HeaderH1 marginBottom={"3%"} color={"#FFFFFF"}>
        Demo Timers
      </HeaderH1>
      {/* here: render timers */}
      {timers.map((timer) => {
        return (
          <>
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
            </BigTimerlistLink>
          </>
        );
      })}
      ;
    </>
  );
};

export default DefaultTimer;
