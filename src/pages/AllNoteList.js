import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import "firebase/firestore";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { GiCoffeeBeans } from "react-icons/gi";
import { EditIconDiv } from "./MyTimers";
import { NoteEditIconDiv } from "./MyNotes";
import { HeaderH1 } from "../components/Input";
import { HeaderH2 } from "./NewTimer";
import { StyledIconDiv } from "./Timer";
import { RatingDiv, SecondWrap } from "./NewNote";
import Swal from "sweetalert2";

export const NoteListContainer = styled.div`
  font-family: "Open Sans Condensed", sans-serif;
  background-color: #aa775b;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 97%;
  min-height: 480 px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const StyledTimerlistLink = styled(Link)`
  font-family: "Open Sans Condensed", sans-serif;
  background-color: ${(props) =>
    props.background ? props.background : "#FBD850"};
  color: #ffffff;
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

export const BigNotelistLink = styled.div`
  font-family: "Open Sans Condensed", sans-serif;
  background-color: ${(props) =>
    props.background ? props.background : "#9BB2A8"};
  color: #ffffff;
  margin: 4% auto;
  border-radius: 10px;
  border: 6px solid transparent;
  padding: ${(props) => (props.padding ? props.padding : "10px 20px")};
  width: ${(props) => (props.width ? props.width : "50%")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  padding: 16px 20px;
  display: flex;
  flex-direction: row;
  margin: 1% auto;
  width: 85%;
  position: relative;
  &:hover {
    border: 6px solid #de6932;
  }
  &:hover ${EditIconDiv} {
    display: block;
  }
  &:hover ${NoteEditIconDiv} {
    display: block;
  }
`;

export const InsideTimerlistWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : "85%")};
  align-items: flex-end;
  justify-content: space-around;
`;

export const NotesTagWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  border-radius: 10px;
`;

export const NotesTag = styled(Link)`
  background-color: #fbd850;
  opacity: 0.6;
  font-weight: bold;
  font-size: 1.3rem;
  text-align: center;
  border-radius: 50px;
  padding: 0.4rem 1.4rem;
  margin: 0;
  margin-bottom: ${(props) => (props.marginbottom ? props.marginbottom : "0")};
  color: ${(props) => (props.color ? props.color : "#000000")};
  &:hover {
    background-color: #fbd850;
    opacity: 1;
  }

  @media (min-width: 768px) {
    padding: 1.5rem 3rem;
    font-size: 2rem;
  }
`;

const AllNoteList = ({ user }) => {
  const [tasteNotes, setTasteNotes] = useState([]);
  const lastPostSnapshotRef = React.useRef();

  useEffect(() => {
    firebase
      .firestore()
      .collection("taste-note")
      .orderBy("createdAt", "desc")
      .onSnapshot((collectionSnapshot) => {
        const data = collectionSnapshot.docs.map((docSnapshot) => {
          const id = docSnapshot.id;
          return { ...docSnapshot.data(), id };
        });
        lastPostSnapshotRef.current =
          collectionSnapshot.docs[collectionSnapshot.docs.length - 1];
        setTasteNotes(data);
        console.log(data);
      });
  }, []);

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
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please login to collect/like this timer.",
        footer:
          '<a href="https://brewsdrip.web.app/login">Click here to login.</a>',
      });
    }
  }

  return (
    <>
      <HeaderH1 marginbottom={"3%"} color={"#FFFFFF"}>
        All Notes
      </HeaderH1>

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
            </InsideTimerlistWrap>
          </BigNotelistLink>
        );
      })}
    </>
  );
};
export default AllNoteList;
