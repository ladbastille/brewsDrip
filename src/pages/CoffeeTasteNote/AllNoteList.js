import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { GiCoffeeBeans } from "react-icons/gi";
import {
  HeaderH1,
  HeaderH2,
  ListContainer,
  NoteEditIconDiv,
  BiglistLink,
  InsideListWrap,
} from "../../components/SubElements";
import {
  StyledIconDiv,
  RatingDiv,
  SecondWrap,
} from "../../components/ContainerAndWrap";
import {
  getCollectionsDescOrder,
  getCollectionsFieldUpdate,
} from "../../utils/firebase";

export const NoteListContainer = styled(ListContainer)`
  background-color: #aa775b;
`;

export const BigNotelistLink = styled(BiglistLink)`
  background-color: #9bb2a8;

  &:hover {
    border: 6px solid #de6932;
  }

  &:hover ${NoteEditIconDiv} {
    display: block;
  }
`;

const AllNoteList = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const [tasteNotes, setTasteNotes] = useState([]);

  useEffect(() => {
    const unsub = getCollectionsDescOrder("taste-note", setTasteNotes);
    return unsub;
  }, []);

  function toggleLikeCollect(activeInField, field, id) {
    const uid = currentUser?.uid;

    if (uid) {
      getCollectionsFieldUpdate("taste-note", id, field, activeInField, uid);
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
        const isLiked = note.likedBy?.includes(currentUser?.uid);
        const isCollected = note.collectedBy?.includes(currentUser?.uid);

        return (
          <BigNotelistLink key={note.id}>
            <InsideListWrap as={Link} to={`/tastenote/${note.id}`}>
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
            </InsideListWrap>

            <InsideListWrap width={"15%"}>
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
            </InsideListWrap>
          </BigNotelistLink>
        );
      })}
    </>
  );
};

export default AllNoteList;
