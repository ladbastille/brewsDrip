import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import { Link, useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import "firebase/firestore";

import Swal from "sweetalert2";

import {
  FaArrowLeft,
  FaRegHeart,
  FaHeart,
  FaPlayCircle,
  FaRegPauseCircle,
  FaStop,
  FaRedoAlt,
} from "react-icons/fa";
import { GiSoundOff, GiSoundOn } from "react-icons/gi";
import { FiShare2 } from "react-icons/fi";
import { BiLinkAlt } from "react-icons/bi";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";

import { HeaderH2 } from "./NewTimer";

import bgm from "../sounds/DonnieOzone-ReturnOfTheGucciGhost.mp3";
import doneSound from "../sounds/done.mp3";
import resetSound from "../sounds/reset.mp3";
import alertSound from "../sounds/alert.mp3";

import timerGif from "../images/pourover.gif";

import {
  FacebookShareButton,
  LineShareButton,
  FacebookIcon,
  LineIcon,
} from "react-share";

const TimerContainer = styled.div`
  font-family: "Open Sans Condensed", sans-serif;
  width: 90%;
  max-width: 768px;
  /* height: 70vh; */
  overflow: hidden;
  margin: 5px auto 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  border-radius: 10px;
  background: ${(props) => (props.background ? props.background : "#FBD850")};
`;

const BrewImg = styled.img`
  border-radius: 10px;
`;

export const Flex100BetweenWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FlexColumnWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1% auto;
`;

const Flex100AroundWrap = styled(Flex100BetweenWrap)`
  justify-content: space-around;
`;

const Flex100CenterWrap = styled(Flex100BetweenWrap)`
  justify-content: center;
`;

const Flex50ColumnWrap = styled(FlexColumnWrap)`
  width: 50%;
`;

const Flex90BetweenWrap = styled(Flex100BetweenWrap)`
  width: 90%;
  margin: ${(props) => props.margin || "5%"};
`;

const StepsBigFont = styled.h1`
  color: #ffffff;
  font-weight: 500;
  font-size: 2.5rem;
  margin: 5px 0;
`;
const StepsSmallFont = styled.h1`
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 400;
`;

const BigTimeFont = styled.h1`
  color: #ffffff;
  font-size: 11rem;
  font-weight: 500;
  margin: 0 auto 5%;
`;

const ControlBtn = styled.button`
  color: #ffffff;
  cursor: pointer;
  background: transparent;
  border: none;
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const StyledIconDiv = styled.div`
  color: #ffffff;
  cursor: pointer;
  background: transparent;
  border: none;
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const StyledIconDivSound = styled(StyledIconDiv)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const ShareBtnDiv = styled(StyledIconDiv)`
  margin-top: 15px;
  width: 100px;
  position: absolute;
  & svg {
    margin-left: 8px;
  }
  @media (max-width: 768px) {
    margin-top: 5px;
  }
`;
// let TIMER_SCRIPT = [
//   {
//     baseColor: "#FBD850",
//     customStep: "step 1",
//     customSec: 3,
//   },
//   {
//     baseColor: "#EFABBA",
//     customStep: "step 2",
//     customSec: 5,
//   },
//   {
//     baseColor: "#00B790",
//     customStep: "step 3",
//     customSec: 7,
//   },
//   {
//     baseColor: "#B4CFCB",
//     customStep: "step 4",
//     customSec: 10,
//   },
// ];

const convertTotalCountTotimerString = (totalCounter) => {
  const secondCounter = totalCounter % 60;
  const minuteCounter = Math.floor(totalCounter / 60);

  let computedSecond =
    String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
  let computedMinute =
    String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;

  return { computedSecond, computedMinute };
};

const Timer = ({ user }) => {
  const Swal = require("sweetalert2");
  const history = useHistory();
  const { timerId } = useParams();
  const [timer, setTimer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isShareClick, setIsShareClick] = useState(false);

  // handle Audio delay issue
  const alertAudio = new Audio(alertSound);
  const resetAudio = new Audio(resetSound);
  const doneAudio = new Audio(doneSound);

  alertAudio.volume = 0.4;
  resetAudio.volume = 0.4;
  doneAudio.volume = 0.4;

  useEffect(() => {
    firebase
      .firestore()
      .collection("timers")
      .doc(timerId)
      .onSnapshot((docSnapshot) => {
        const data = docSnapshot.data();
        setTimer(data);
      });

    // .get()
    // .then((docSnapshot) => {
    //   const data = docSnapshot.data();
    //   // console.log(timerId)
    //   console.log(data);
    //   setTimer(data);
    // });
  }, []);

  const [isActive, setIsActive] = useState(false);
  const [isPause, setIsPause] = useState(true);
  const [isReset, setIsReset] = useState(false);

  //  test change data of timer
  const [milliseconds, setMilliseconds] = useState(0);

  const [totalCounter, setTotalCounter] = useState(0);

  const [pointer, setPointer] = useState(0);
  const [doneAlert, setDoneAlert] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  // const isMuted = timer?.mutedBy?.includes(firebase.auth().currentUser?.uid);

  const useAudio = (url) => {
    const [audio] = useState(new Audio(url));
    // audio.preload = false;
    const [playing, setPlaying] = useState(false);
    const toggle = () => setPlaying(!playing);

    useEffect(() => {
      playing ? audio.play() : audio.pause();
    }, [playing]);

    useEffect(() => {
      isMuted ? (audio.volume = 0.001) : (audio.volume = 0.5);
    }, [isMuted]);

    useEffect(() => {
      audio.addEventListener("ended", () => setPlaying(false));
      return () => {
        audio.removeEventListener("ended", () => setPlaying(false));
      };
    }, []);

    return [playing, toggle];
  };

  const [playing, toggle] = useAudio(bgm);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        setTotalCounter((totalCounter) => totalCounter + 1);

        if (timer.endTime === totalCounter + 1) {
          setIsActive(false);
          setIsPause(true);
          setDoneAlert(true);
          setIsReset(false);
          toggle(false);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, totalCounter]);

  // test change data type of timer
  // React.useEffect(() => {
  //   if (milliseconds === 1000) {
  //     setTotalCounter((totalCounter) => totalCounter + 1);
  //     setMilliseconds(0);
  //   }
  // }, [milliseconds]);

  // useEffect(() => {
  //   const currentStep = TIMER_SCRIPT[pointer];
  //   const lastStepIndex = TIMER_SCRIPT.length;
  //   const { customSec } = currentStep;
  //   if (totalCounter === customSec) {
  //     setPointer((pointer) =>
  //       pointer + 1 < lastStepIndex ? pointer + 1 : pointer
  //     );
  //     playAudio(alert);
  //   }
  // }, [pointer, totalCounter]);

  useEffect(() => {
    if (timer !== null) {
      const currentStep = timer.customSec[pointer];
      const lastStepIndex = timer.customSec.length;
      // const { customSec } = currentStep;
      console.log("CurStepSec:" + timer.customSec[pointer]);

      if (totalCounter === timer.customSec[0]) {
        setPointer(1);
        alertAudio.play();
      } else if (totalCounter === timer.customSec[0] + timer.customSec[1]) {
        if (pointer + 1 < lastStepIndex) {
          setPointer(2);
        } else {
        }

        alertAudio.play();
      } else if (
        totalCounter ===
        timer.customSec[0] + timer.customSec[1] + timer.customSec[2]
      ) {
        if (pointer + 1 < lastStepIndex) {
          setPointer(3);
        } else {
        }
        alertAudio.play();
      } else if (
        totalCounter ===
        timer.customSec[0] +
          timer.customSec[1] +
          timer.customSec[2] +
          timer.customSec[3]
      ) {
        setPointer((pointer) =>
          pointer + 1 < lastStepIndex ? pointer + 1 : pointer
        );
        alertAudio.play();
      }

      // if (pointer + 1 ) {
      //   playAudio(alertSound);
      // }

      if (totalCounter !== 0 && !playing) {
        toggle(playing);
      }
      // new Audio(alertSound);
    }
  }, [pointer, totalCounter]);

  // console.log("Pointer:" + pointer);

  function startTimer() {
    setIsActive(!isActive);
    setIsPause((prev) => !prev);
    setIsReset(false);
    setDoneAlert(false);
    toggle(true);
  }

  function stopTimer() {
    setIsActive(false);
    setIsPause(true);
    setIsReset(false);
    toggle(false);
    setDoneAlert(true);
  }

  async function handlePressLastPage() {
    await stopTimer();
    await history.push("/timerlist");
  }

  function resetTimer() {
    setIsActive(false);
    setIsPause(true);
    setIsReset(true);
    setTotalCounter(0);
    setPointer(0);
    resetAudio.play();
    // setDoneAlert(true);
    // toggle(false);
  }

  // function playAudio(src) {
  //   // new Audio(src).play()
  //   const alertAudio = new Audio(src);
  //   alertAudio.volume = 0.4;
  //   alertAudio.play();
  // }

  if (doneAlert && !isReset) {
    doneAudio.play();
  }

  // useEffect(() => {
  //   let interval;
  //   if (isActive) {
  //     interval = window.setInterval(() => {
  //       countdown();
  //     }, 1000);
  //   } else if (!isActive && totalCounter !== 0) {
  //     clearInterval(interval);
  //   }
  //   return () => clearInterval(interval);
  // }, [isActive, totalCounter]);

  // TODO:
  // if (timers.length === 0) {
  //   return <div>Please set a new timer</div>;
  // }

  const { computedMinute, computedSecond } =
    convertTotalCountTotimerString(totalCounter);

  // console.log(TIMER_SCRIPT[pointer]);

  // const { baseColor, customStep } = TIMER_SCRIPT[pointer];
  // const nexrCustomStep =
  //   pointer === TIMER_SCRIPT.length - 1
  //     ? ""
  //     : TIMER_SCRIPT[pointer + 1].customStep;
  // const totalSteps = TIMER_SCRIPT.length;

  if (!timer) return null;
  const customColor = timer.customColor[pointer]?.value;
  const customStep = timer.customStep[pointer];
  const customSec = timer.customSec[pointer];

  const nextCustomStep =
    pointer === timer.customStep.length - 1
      ? ""
      : timer.customStep[pointer + 1];

  const totalSteps = timer.customSec.length;

  // console.log(timer);

  // if(timer.endTime === totalCounter){
  //   clearInterval(intervalId)
  // };

  function toggleLikeCollect(activeInField, field) {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please login to collect this timer.",
        footer: '<a href="https://brewsdrip.web.app/login">Click here to login.</a>'
      });
    } else {
      const uid = firebase.auth().currentUser.uid;
      firebase
        .firestore()
        .collection("timers")
        .doc(timerId)
        .update({
          [field]: activeInField
            ? firebase.firestore.FieldValue.arrayRemove(uid)
            : firebase.firestore.FieldValue.arrayUnion(uid),
        });
    }
  }

  const isCollected = timer.collectedBy?.includes(
    firebase.auth().currentUser?.uid
  );

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    Swal.fire("Go share now!", "You've copied the url!", "success");
    setIsShareClick((prev) => !prev);
  };

  const onShareWindowClose = () => {
    Swal.fire("Awesome!", "You've shared this timer!", "success");
    setIsShareClick((prev) => !prev);
  };
  // const isLiked = timer.likedBy?.includes(firebase.auth().currentUser?.uid);
  // const isMuted = timer.mutedBy?.includes(firebase.auth().currentUser.uid);

  // if (isMuted) {
  //   new Audio(bgm).volume = 0;
  // } else {
  //   new Audio(bgm).volume = 0.5;
  // }
  // console.log(audio.volume)
  // console.log(user)
  return (
    <>
      {timer && (
        <>
          <TimerContainer background={customColor}>
            <FlexColumnWrap>
              <Flex100BetweenWrap>
                <ControlBtn>
                  <FaArrowLeft
                    color={"#ffffff"}
                    size={"1.5rem"}
                    style={{ alignSelf: "flex-start" }}
                    onClick={handlePressLastPage}
                  />
                </ControlBtn>

                <HeaderH2 color="#FFFFFF">{timer.timerName}</HeaderH2>
                <BrewImg src={timerGif}></BrewImg>
              </Flex100BetweenWrap>

              <Flex100AroundWrap>
                <Flex50ColumnWrap>
                  <StepsBigFont>{customStep}</StepsBigFont>
                  {/* <div className="currentStep">{`NOW: ${customStep}`}</div> */}
                  <StepsSmallFont>
                    {pointer !== timer.customStep.length - 1 && nextCustomStep}
                    {/* {pointer !== timer.customStep.length - 1 && `next: ${nextCustomStep}`} */}
                  </StepsSmallFont>
                </Flex50ColumnWrap>
                <Flex50ColumnWrap style={{ alignItems: "flex-end" }}>
                  <StepsBigFont>{`${pointer + 1}/${totalSteps}`}</StepsBigFont>
                  <StepsSmallFont>STEP</StepsSmallFont>
                </Flex50ColumnWrap>
              </Flex100AroundWrap>
            </FlexColumnWrap>

            <Flex100CenterWrap>
              <BigTimeFont>
                {computedMinute}:{computedSecond}
              </BigTimeFont>
            </Flex100CenterWrap>

            <Flex90BetweenWrap>
              <ControlBtn
                disabled={isActive ? "disabled" : ""}
                onClick={() => resetTimer()}
              >
                <FaRedoAlt color="#FFFFFF" size="1.5rem" />
              </ControlBtn>
              <ControlBtn
                disabled={!isActive ? "disabled" : ""}
                onClick={stopTimer}
              >
                <FaStop color="#FFFFFF" size="1.5rem" />
              </ControlBtn>
            </Flex90BetweenWrap>

            <Flex100CenterWrap>
              <StyledIconDiv onClick={startTimer}>
                {!isActive ? (
                  <FaPlayCircle color="#FFFFFF" size="6rem" />
                ) : (
                  <FaRegPauseCircle color="#FFFFFF" size="6rem" />
                )}
              </StyledIconDiv>
            </Flex100CenterWrap>

            <Flex90BetweenWrap margin={"6%"}>
              <StyledIconDiv>
                <FiShare2
                  color={"white"}
                  size={"1.5rem"}
                  onClick={() => setIsShareClick((prev) => !prev)}
                />
                {isShareClick && (
                  <ShareBtnDiv>
                    <FacebookShareButton
                      url={window.location.href}
                      quote={
                        "I've found an awesome coffee timer. Let's try it!"
                      }
                      hashtag={["brewsDrip", "YourBestCoffeePal"]}
                      onShareWindowClose={() => onShareWindowClose}
                    >
                      <FacebookIcon size={25} round />
                    </FacebookShareButton>
                    <LineShareButton
                      url={window.location.href}
                      title={
                        "I've found an awesome coffee timer. Let's try it!"
                      }
                      onShareWindowClose={onShareWindowClose}
                    >
                      <LineIcon size={25} round />
                    </LineShareButton>
                    <BiLinkAlt size={25} onClick={handleCopyUrl} />
                  </ShareBtnDiv>
                )}
              </StyledIconDiv>

              <StyledIconDivSound>
                {!isMuted ? (
                  <GiSoundOn
                    color={"white"}
                    size={"2rem"}
                    onClick={() => setIsMuted(true)}
                    // onClick={() => toggleLikeCollect(isMuted, "mutedBy")}
                  />
                ) : (
                  <GiSoundOff
                    color={"white"}
                    size={"2rem"}
                    onClick={() => setIsMuted(false)}
                    // onClick={() => toggleLikeCollect(isMuted, "mutedBy")}
                  />
                )}
              </StyledIconDivSound>

              <StyledIconDiv>
                {!isCollected ? (
                  <IoBookmarkOutline
                    color={"white"}
                    size={"1.5rem"}
                    onClick={() =>
                      toggleLikeCollect(isCollected, "collectedBy")
                    }
                  />
                ) : (
                  <IoBookmark
                    color={"white"}
                    size={"1.5rem"}
                    onClick={() =>
                      toggleLikeCollect(isCollected, "collectedBy")
                    }
                  />
                )}
              </StyledIconDiv>
            </Flex90BetweenWrap>
          </TimerContainer>
        </>
      )}
    </>
  );
};
export default Timer;
