import React,{useState,useEffect} from 'react';
import firebase from '../utils/firebase';
import { TimerListContainer,StyledTimerlistLink,TimersTagWrap,TimersTag,BigTimerlistLink,InsideTimerlistWrap } from './AllTimerList';
import "firebase/firestore";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import { FaArrowLeft, FaRegHeart, FaHeart, FaEdit } from "react-icons/fa";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { AiFillSetting } from "react-icons/ai";

import { HeaderH1 } from "../components/Input";
import { HeaderH2 } from "./NewTimer";
import { StyledIconBtn } from "../components/Timer";
import Header from "../components/Header";

function MyTimers() {
  const [timers, setTimers] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection('timers')
      .where('author.uid', '==', firebase.auth().currentUser?.uid)
      .get()
      .then((collectionSnapshot) => {
        const data = collectionSnapshot.docs.map((docSnapshot) => {
          const id = docSnapshot.id;
          return { ...docSnapshot.data(), id };
        });
        setTimers(data);
      });
  }, []);
  return (
    <>
     <TimerListContainer>
        <FaArrowLeft
          color={"#ffffff"}
          size={"1.5rem"}
          style={{ alignSelf: "flex-start" }}
        />
        <HeaderH1 color={"#ffffff"}>Timer List</HeaderH1>
        <StyledTimerlistLink
          to="/newtimer"
          background={"#939597"}
          color={"#FFFFFF"}
        >
          <HeaderH2 color={"#FFFFFF"}>+ NEW TIMER</HeaderH2>
        </StyledTimerlistLink>
        <TimersTagWrap>
        <TimersTag to="/timerlist" marginBottom={"3%"} color={"#FFFFFF"}>
          All
        </TimersTag>
        <TimersTag to="/timerlist/default" marginBottom={"3%"} color={"#FFFFFF"}>
          Default
        </TimersTag>
        <TimersTag to="/timerlist/collected" marginBottom={"3%"} color={"#FFFFFF"}>
          Collected
        </TimersTag>
        <TimersTag to="/timerlist/mytimers" marginBottom={"3%"} color={"#FFFFFF"}>
          My Timers
        </TimersTag>
        </TimersTagWrap>
        <HeaderH1 marginBottom={"3%"} color={"#FFFFFF"}>
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
          console.log(isLiked);
          return (
            <BigTimerlistLink
              key={timer.id}
              background={timer.baseColor.value}
              color={"#000000"}
            >
              <InsideTimerlistWrap as={Link} to={`/timerlist/${timer.id}`}>
                <HeaderH2 margin={"1.5% auto 2% 1.5%"} fontSize={"1.8rem"}>
                  {timer.timerName}
                </HeaderH2>
                <HeaderH2
                  margin={"1.5% auto 2% 1.5%"}
                  fontSize={"1.6rem"}
                  color={"#ffffff"}
                >
                  {`Steps at ${timer.customSec} secs`}
                </HeaderH2>
              </InsideTimerlistWrap>
              <InsideTimerlistWrap width={"10%"}>
                <StyledIconBtn>
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
                </StyledIconBtn>
                <StyledIconBtn>
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
                </StyledIconBtn>
                {/* <StyledIconBtn>{<FaEdit size={"1.5rem"} />}</StyledIconBtn> */}
              </InsideTimerlistWrap>
            </BigTimerlistLink>
          );
        })}
      </TimerListContainer>
    </>
  );
}

export default MyTimers;
