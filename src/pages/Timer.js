import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import "firebase/firestore";
import successCoffeeImg from "../images/swal-success-pic.jpg";
import Swal from "sweetalert2";

import {
  FaArrowLeft,
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

export const Flex90BetweenWrap = styled(Flex100BetweenWrap)`
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

export const ShareBtnDiv = styled(StyledIconDiv)`
  margin-top: 15px;
  width: 120px;
  position: absolute;
  & svg {
    margin-left: 8px;
  }
  @media (max-width: 768px) {
    margin-top: 5px;
  }
`;

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
  const history = useHistory();
  const { timerId } = useParams();
  const [timer, setTimer] = useState(null);
  const [isShareClick, setIsShareClick] = useState(false);

  // handle Audio delay issue
  const alertAudio = new Audio(alertSound);
  const resetAudio = new Audio(resetSound);
  const doneAudio = new Audio(doneSound);

  alertAudio.volume = 0.2;
  resetAudio.volume = 0.2;
  doneAudio.volume = 0.2;

  useEffect(() => {
    firebase
      .firestore()
      .collection("timers")
      .doc(timerId)
      .onSnapshot((docSnapshot) => {
        const data = docSnapshot.data();
        setTimer(data);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isActive, setIsActive] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [totalCounter, setTotalCounter] = useState(0);
  const [pointer, setPointer] = useState(0);
  const [doneAlert, setDoneAlert] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const useAudio = (url) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
    const toggle = () => setPlaying(!playing);

    useEffect(() => {
      playing ? audio.play() : audio.pause();
    }, [audio, playing]);

    useEffect(() => {
      isMuted ? (audio.volume = 0.001) : (audio.volume = 0.3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMuted]);

    useEffect(() => {
      audio.addEventListener("ended", () => setPlaying(false));
      return () => {
        audio.removeEventListener("ended", () => setPlaying(false));
      };
    }, [audio]);

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
          setDoneAlert(true);
          setIsReset(false);
          toggle(false);
          Swal.fire({
            title: "Sweet!",
            text: "Enjoy your coffee!",
            imageUrl: successCoffeeImg,
            imageWidth: 400,
            imageHeight: 266.25,
            imageAlt: "Cheers Coffee",
          });
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, totalCounter]);

  useEffect(() => {
    if (timer !== null) {
      const lastStepIndex = timer.customSec.length;

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

      if (totalCounter !== 0 && !playing) {
        toggle(playing);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pointer, totalCounter]);

  function startTimer() {
    setIsActive(!isActive);
    setIsReset(false);
    setDoneAlert(false);
    toggle(true);
  }

  function stopTimer() {
    setIsActive(false);
    setIsReset(false);
    toggle(false);
    setDoneAlert(true);
  }

  function stopByPressLastPage() {
    setIsActive(false);
    setIsReset(false);
    if (playing) {
      toggle(false);
    } else if (!playing) {
    }
  }

  async function handlePressLastPage() {
    await stopByPressLastPage();
    await history.push("/timerlist");
  }

  function resetTimer() {
    setIsActive(false);
    setIsReset(true);
    setTotalCounter(0);
    setPointer(0);
    resetAudio.play();
  }

  if (doneAlert && !isReset) {
    doneAudio.play();
  }

  const { computedMinute, computedSecond } =
    convertTotalCountTotimerString(totalCounter);

  if (!timer) return null;
  const customColor = timer.customColor[pointer]?.value;
  const customStep = timer.customStep[pointer];

  const nextCustomStep =
    pointer === timer.customStep.length - 1
      ? ""
      : timer.customStep[pointer + 1];

  const totalSteps = timer.customSec.length;

  function toggleLikeCollect(activeInField, field) {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please login to collect this timer.",
        footer:
          '<a href="https://brewsdrip.web.app/login">Click here to login.</a>',
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
    Swal.fire("Go share now!", "You've copied the URL!", "success");
    setIsShareClick((prev) => !prev);
  };

  const onShareWindowClose = () => {
    Swal.fire("Awesome!", "Let's share this timer!", "success");
    setIsShareClick((prev) => !prev);
  };

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

                  <StepsSmallFont>
                    {pointer !== timer.customStep.length - 1 && nextCustomStep}
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
                      onShareWindowClose={onShareWindowClose}
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
                    <BiLinkAlt
                      size={25}
                      color={"#FFFFFF"}
                      onClick={handleCopyUrl}
                    />
                  </ShareBtnDiv>
                )}
              </StyledIconDiv>

              <StyledIconDivSound>
                {!isMuted ? (
                  <GiSoundOn
                    color={"white"}
                    size={"2rem"}
                    onClick={() => setIsMuted(true)}
                  />
                ) : (
                  <GiSoundOff
                    color={"white"}
                    size={"2rem"}
                    onClick={() => setIsMuted(false)}
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
