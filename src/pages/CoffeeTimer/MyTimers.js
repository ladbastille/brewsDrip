import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Waypoint } from "react-waypoint";
import styled from "styled-components";
import Swal from "sweetalert2";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { RiDeleteBack2Fill } from "react-icons/ri";
import {
  getMyCollections,
  getCollectionsFieldUpdate,
  deleteDoc,
  getMyCollectionsWaypoint,
} from "../../utils/firebase";
import { BigTimerlistLink } from "./AllTimerList";
import {
  HeaderH1,
  HeaderH2,
  InsideListWrap,
} from "../../components/SubElements";
import { StyledIconDiv } from "../../components/ContainerAndWrap";

export const EditIconDiv = styled(StyledIconDiv)`
  position: absolute;
  background: #d42927;
  border-radius: 50px;
  padding: 3px;
  top: 0;
  right: 0;
  margin: -18px -15px 0 0;
  display: none;
`;

function MyTimers() {
  const [timers, setTimers] = useState([]);
  const currentUser = useSelector((state) => state.currentUser);
  const lastNoteSnapshotRef = useRef();

  useEffect(() => {
    if (currentUser) {
      const unsub = getMyCollections(
        "timers",
        currentUser,
        setTimers,
        lastNoteSnapshotRef
      );
      return unsub;
    }
  }, [currentUser]);

  function toggleLikeCollect(activeInField, field, id) {
    const uid = currentUser?.uid;
    if (uid) {
      getCollectionsFieldUpdate("timers", id, field, activeInField, uid);
    }
  }

  function handleDeleteTimer(timerid) {
    deleteDoc("timers", timerid);
    Swal.fire("Done!", "The coffee timer has been deleted!", "success");
  }
  return (
    <>
      <HeaderH1 marginbottom={"3%"} color={"#FFFFFF"}>
        My Timers
      </HeaderH1>

      {timers.map((timer) => {
        const isLiked = timer.likedBy?.includes(currentUser?.uid);
        const isCollected = timer.collectedBy?.includes(currentUser.uid);
        return (
          <BigTimerlistLink
            key={timer.id}
            background={timer.baseColor.value}
            color={"#000000"}
          >
            <InsideListWrap as={Link} to={`/timer/${timer.id}`}>
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
            </InsideListWrap>
            <InsideListWrap width={"15%"}>
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
            </InsideListWrap>
            <EditIconDiv
              onClick={(e) => {
                handleDeleteTimer(timer.id);
              }}
            >
              {<RiDeleteBack2Fill size={"1.5rem"} />}
            </EditIconDiv>
          </BigTimerlistLink>
        );
      })}
      <Waypoint
        onEnter={() => {
          if (lastNoteSnapshotRef.current) {
            getMyCollectionsWaypoint(
              "timers",
              currentUser,
              timers,
              setTimers,
              lastNoteSnapshotRef
            );
          }
        }}
      />
    </>
  );
}

export default MyTimers;
