import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { EditIconDiv } from "./MyTimers";
import { HeaderH1, HeaderH2 } from "../components/SubElements";
import { StyledIconDiv } from "../components/ContainerAndWrap";
import {
  getCollectionsDescOrder,
  getCollectionsFieldUpdate,
} from "../utils/firebase";

export const TimerListContainer = styled.div`
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
  margin-bottom: 20px;
  margin-top: 10px;
  box-sizing: border-box;
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

export const BigTimerlistLink = styled.div`
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
`;

export const InsideTimerlistWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : "85%")};
  align-items: flex-end;
  justify-content: space-around;
`;

export const TimersTagWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  border-radius: 10px;
`;

export const TimersTag = styled(Link)`
  background-color: #de6932;
  opacity: 0.6;
  font-weight: bold;
  font-size: 1.3rem;
  text-align: center;
  border-radius: 50px;
  padding: 0.4rem 0.65rem;
  margin: 0;
  margin-bottom: ${(props) => (props.marginbottom ? props.marginbottom : "0")};
  color: ${(props) => (props.color ? props.color : "#000000")};
  &:hover {
    background-color: #de6932;
    opacity: 1;
  }

  @media (min-width: 768px) {
    padding: 1.5rem 2.8rem;
    font-size: 2rem;
  }
`;

const AllTimerList = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const [timers, setTimers] = useState([]);

  useEffect(() => {
    const unsub = getCollectionsDescOrder("timers", setTimers);
    return unsub;
  }, []);

  function toggleLikeCollect(activeInField, field, id) {
    const uid = currentUser?.uid;
    if (uid) {
      getCollectionsFieldUpdate("timers", id, field, activeInField, uid);
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
        All Timers
      </HeaderH1>

      {timers.map((timer) => {
        const isLiked = timer.likedBy?.includes(currentUser?.uid);
        const isCollected = timer.collectedBy?.includes(currentUser?.uid);

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
};

export default AllTimerList;
