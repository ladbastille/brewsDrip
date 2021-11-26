import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import { BigTimerlistLink, InsideTimerlistWrap } from "./AllTimerList";
import "firebase/firestore";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";

import { HeaderH1 } from "../components/Input";
import { HeaderH2 } from "./NewTimer";
import { StyledIconDiv } from "./Timer";

function CollectedTimers({ user }) {
  const [timers, setTimers] = useState([]);

  useEffect(() => {
    console.log(user);

    if (user) {
      firebase
        .firestore()
        .collection("timers")
        .where(
          "collectedBy",
          "array-contains",
          firebase.auth().currentUser?.uid
        )
        .orderBy("createdAt", "desc")
        .onSnapshot((collectionSnapshot) => {
          const data = collectionSnapshot.docs.map((docSnapshot) => {
            const id = docSnapshot.id;
            return { ...docSnapshot.data(), id };
          });
          setTimers(data);
        });
    }
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

  return (
    <>
      <HeaderH1 marginbottom={"3%"} color={"#FFFFFF"}>
        Collected Timers
      </HeaderH1>

      {timers.map((timer) => {
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
                    onClick={() =>
                      toggleLikeCollect(isLiked, "likedBy", timer.id)
                    }
                  />
                ) : (
                  <FaHeart
                    color={"white"}
                    size={"1.5rem"}
                    onClick={() =>
                      toggleLikeCollect(isLiked, "likedBy", timer.id)
                    }
                  />
                )}
                <span>&thinsp;{timer.likedBy?.length || 0}</span>
              </StyledIconDiv>
              <StyledIconDiv>
                {!isCollected ? (
                  <IoBookmarkOutline
                    size={"1.5rem"}
                    onClick={() =>
                      toggleLikeCollect(isCollected, "collectedBy", timer.id)
                    }
                  />
                ) : (
                  <IoBookmark
                    size={"1.5rem"}
                    onClick={() =>
                      toggleLikeCollect(isCollected, "collectedBy", timer.id)
                    }
                  />
                )}
                <span>&thinsp;{timer.collectedBy?.length || 0}</span>
              </StyledIconDiv>
            </InsideTimerlistWrap>
          </BigTimerlistLink>
        );
      })}
    </>
  );
}

export default CollectedTimers;
