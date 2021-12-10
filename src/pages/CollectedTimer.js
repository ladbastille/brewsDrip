import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { HeaderH1, HeaderH2 } from "../components/SubElements";
import { StyledIconDiv } from "../components/ContainerAndWrap";
import { BigTimerlistLink, InsideTimerlistWrap } from "./AllTimerList";
import {
  getCollectedCollections,
  getCollectionsFieldUpdate,
} from "../utils/firebase";

function CollectedTimers() {
  const [timers, setTimers] = useState([]);
  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    if (currentUser) {
      const unsub = getCollectedCollections("timers", currentUser, setTimers);
      return unsub;
    }
  }, [currentUser]);

  function toggleLikeCollect(activeInField, field, id) {
    const uid = currentUser?.uid;
    if (uid) {
      getCollectionsFieldUpdate("timers", id, field, activeInField, uid);
    }
  }

  return (
    <>
      <HeaderH1 marginbottom={"3%"} color={"#FFFFFF"}>
        Collected Timers
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
