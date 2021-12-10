import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { GiCoffeeBeans } from "react-icons/gi";
import { InsideTimerlistWrap } from "./AllTimerList";
import { BigNotelistLink } from "./AllNoteList";
import { RatingDiv, SecondWrap } from "./NewNote";
import { HeaderH1, HeaderH2 } from "../components/SubElements";
import { StyledIconDiv } from "../components/ContainerAndWrap";
import {
  getCollectedCollections,
  getCollectionsFieldUpdate,
} from "../utils/firebase";

function CollectedTimers() {
  const currentUser = useSelector((state) => state.currentUser);
  const [tasteNotes, setTasteNotes] = useState([]);

  useEffect(() => {
    if (currentUser) {
      const unsub = getCollectedCollections(
        "taste-note",
        currentUser,
        setTasteNotes
      );
      return unsub;
    }
  }, [currentUser]);

  function toggleLikeCollect(activeInField, field, id) {
    const uid = currentUser?.uid;
    if (uid) {
      getCollectionsFieldUpdate("taste-note", id, field, activeInField, uid);
    }
  }

  return (
    <>
      <HeaderH1 marginbottom={"3%"} color={"#FFFFFF"}>
        Collected Notes
      </HeaderH1>

      {tasteNotes.map((note) => {
        const isLiked = note.likedBy?.includes(currentUser?.uid);
        const isCollected = note.collectedBy?.includes(currentUser?.uid);

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
                fontSize={"1.1rem"}
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
                        <RatingDiv key={uuidv4()} margin={"0px 4px"}>
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
}

export default CollectedTimers;
