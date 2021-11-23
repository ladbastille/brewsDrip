import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import firebase from "../utils/firebase";
import "firebase/firestore";
import {
  TimerListContainer,
  StyledTimerlistLink,
  TimersTagWrap,
  TimersTag,
  InsideTimerlistWrap,
} from "./AllTimerList";
import { BigNotelistLink } from "./AllNoteList";
import { FaArrowLeft, FaRegHeart, FaHeart, FaEdit } from "react-icons/fa";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { TiDeleteOutline, TiDelete } from "react-icons/ti";
import { FiDelete } from "react-icons/fi";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { GiCoffeeBeans } from "react-icons/gi";
import { RatingDiv, SecondWrap } from "./NewNote";
import { HeaderH1 } from "../components/Input";
import { HeaderH2 } from "./NewTimer";
import { StyledIconDiv } from "./Timer";
import Header from "../components/Header";

export const NoteEditIconDiv = styled(StyledIconDiv)`
  position: absolute;
  background: #d42927;
  border-radius: 50px;
  padding: 3px;
  top: 0;
  right: 0;
  margin: -18px -20px 0 0;
  display: none;
`;

function MyTimers({ user }) {
  const [tasteNotes, setTasteNotes] = useState([]);

  useEffect(() => {
    console.log(user);

    if (user) {
      firebase
        .firestore()
        .collection("taste-note")
        .where("author.uid", "==", firebase.auth().currentUser.uid)
        .orderBy("createdAt", "desc")
        // .get()
        // .then((collectionSnapshot) => {
        .onSnapshot((collectionSnapshot) => {
          const data = collectionSnapshot.docs.map((docSnapshot) => {
            const id = docSnapshot.id;
            return { ...docSnapshot.data(), id };
          });
          setTasteNotes(data);
        });
    }
  }, [user]);

  function toggleLikeCollect(activeInField, field, id) {
    const uid = firebase.auth().currentUser?.uid;
    if (uid) {
      firebase
        .firestore()
        .collection("taste-note")
        .doc(id)
        .update({
          [field]: activeInField
            ? firebase.firestore.FieldValue.arrayRemove(uid)
            : firebase.firestore.FieldValue.arrayUnion(uid),
        });
    }
  }

  const isCollected = tasteNotes.collectedBy?.includes(
    firebase.auth().currentUser.uid
  );
  const isLiked = tasteNotes.likedBy?.includes(firebase.auth().currentUser.uid);
  const currentUserId = firebase.auth().currentUser?.uid;

  function handleDeleteNote(noteid) {
    firebase.firestore().collection("taste-note").doc(noteid).delete();
  }

  return (
    <>
      <HeaderH1 marginbottom={"3%"} color={"#FFFFFF"}>
        My Notes
      </HeaderH1>
      {/* here: render timers */}

      {tasteNotes.map((note) => {
        const isLiked = note.likedBy?.includes(
          firebase.auth().currentUser?.uid
        );
        const isCollected = note.collectedBy?.includes(
          firebase.auth().currentUser?.uid
        );
        console.log(isLiked);
        return (
          <BigNotelistLink key={note.id} color={"#000000"}>
            <InsideTimerlistWrap as={Link} to={`/tastenote/${note.id}`}>
              <HeaderH2
                margin={"1.5% auto 2% 1.5%"}
                fontSize={"1.5rem"}
                color={"#FFFFFF"}
              >
                {note.coffeeName}
              </HeaderH2>

              <HeaderH2
                margin={"1.5% auto 2% 1.5%"}
                fontSize={"1.2rem"}
                color={"#ffffff"}
              >
                {note.place} |{" "}
                {`${note.createdAt?.toDate().toLocaleDateString()}`}
              </HeaderH2>

              <SecondWrap margin={"5px auto 0 5px"} flexDirection={"row"}>
                {note.rating
                  ? [...Array(5)].map((star, index) => {
                      const ratingValue = (index += 1);
                      return (
                        <RatingDiv margin={"0px 4px"}>
                          <label>
                            <input
                              type="radio"
                              name="rating"
                              value={ratingValue}
                              key={index}
                            />
                            <GiCoffeeBeans
                              color={
                                ratingValue <= note.rating
                                  ? "#fbd850"
                                  : "#e5e5e5"
                              }
                              size={20}
                            />
                          </label>
                        </RatingDiv>
                      );
                    })
                  : ""}
              </SecondWrap>
              {/* </HeaderH2> */}
            </InsideTimerlistWrap>

            <InsideTimerlistWrap width={"15%"}>
              <StyledIconDiv>
                {!isLiked ? (
                  <FaRegHeart
                    color={"white"}
                    size={"1.5rem"}
                    onClick={() =>
                      toggleLikeCollect(isLiked, "likedBy", note.id)
                    }
                  />
                ) : (
                  <FaHeart
                    color={"white"}
                    size={"1.5rem"}
                    onClick={() =>
                      toggleLikeCollect(isLiked, "likedBy", note.id)
                    }
                  />
                )}
                <span>&thinsp;{note.likedBy?.length || 0}</span>
              </StyledIconDiv>
              <StyledIconDiv>
                {!isCollected ? (
                  <IoBookmarkOutline
                    size={"1.5rem"}
                    onClick={() =>
                      toggleLikeCollect(isCollected, "collectedBy", note.id)
                    }
                  />
                ) : (
                  <IoBookmark
                    size={"1.5rem"}
                    onClick={() =>
                      toggleLikeCollect(isCollected, "collectedBy", note.id)
                    }
                  />
                )}
                <span>&thinsp;{note.collectedBy?.length || 0}</span>
              </StyledIconDiv>
              {/* <StyledIconDiv>{<FaEdit size={"1.5rem"} />}</StyledIconDiv> */}
            </InsideTimerlistWrap>
            <NoteEditIconDiv
              onClick={(e) => {
                handleDeleteNote(note.id);
              }}
            >
              {<RiDeleteBack2Fill size={"1.5rem"} />}
            </NoteEditIconDiv>
          </BigNotelistLink>
        );
      })}
    </>
  );
}

export default MyTimers;
