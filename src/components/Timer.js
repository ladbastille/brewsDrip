import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import { useParams } from "react-router-dom";
import "firebase/firestore";
import "../components/timer.css";
import styled from "styled-components";
import bgm from "../sounds/DonnieOzone-ReturnOfTheGucciGhost.mp3";
import done from "../sounds/done.mp3";
import alert from "../sounds/alert.mp3";

const TimerContainer = styled.div`
  width: 90%;
  height: 70vh;
  margin: 0 auto;
  display: grid;
  place-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 10px;
  background: ${(props) => (props.background ? props.background : "grey")};
`;

let TIMER_SCRIPT = [
  {
    baseColor: "#FBD850",
    customStep: "step 1",
    customSec: 3,
  },
  {
    baseColor: "#EFABBA",
    customStep: "step 2",
    customSec: 5,
  },
  {
    baseColor: "#00B790",
    customStep: "step 3",
    customSec: 7,
  },
  {
    baseColor: "#B4CFCB",
    customStep: "step 4",
    customSec: 10,
  },
];

const convertTotalCountTotimerString = (totalCounter) => {
  const secondCounter = totalCounter % 60;
  const minuteCounter = Math.floor(totalCounter / 60);

  let computedSecond =
    String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
  let computedMinute =
    String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;

  return { computedSecond, computedMinute };
};

const Timer = () => {
  const { timerId } = useParams();
  const [timer, setTimer] = useState(null);
  const [timerData, setTimerData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const db = firebase.firestore();

  useEffect(() => {
    firebase
      .firestore()
      .collection("timers")
      .doc(timerId)
      // .onSnapshot((docSnapshot) => {
      //   const data = docSnapshot.data();
      //   setTimer(data);
      // });
      .get()
      .then((docSnapshot) => {
        const data = docSnapshot.data();
        // console.log(timerId)
        console.log(data);
        setTimer(data);
        // handleSetScript(data)
      });
  }, []);

  function handleSetScript() {
    return (TIMER_SCRIPT = [
      {
        baseColor: customColor[0].value,
        customStep: "step 1",
        customSec: 5,
      },
      {
        baseColor: customColor[1],
        customStep: "step 2",
        customSec: 10,
      },
      {
        baseColor: customColor[2],
        customStep: "step 3",
        customSec: 15,
      },
      {
        baseColor: customColor[3],
        customStep: "step 4",
        customSec: 20,
      },
    ]);
  }

  // const AudioContext = window.AudioContext || window.webkitAudioContext;
  // const audioCtx = new AudioContext();
  const [isActive, setIsActive] = useState(false);
  const [isPause, setIsPause] = useState(true);
  const [totalCounter, setTotalCounter] = useState(0);
  const [pointer, setPointer] = useState(0);
  const [doneAlert, setDoneAlert] = useState(false);

  const useAudio = (url) => {
    const [audio] = useState(new Audio(url));
    // audio.preload = false;
    const [playing, setPlaying] = useState(false);
    const toggle = () => setPlaying(!playing);

    useEffect(() => {
      playing ? audio.play() : audio.pause();
    }, [playing]);

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
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, totalCounter]);

  useEffect(() => {
    const currentStep = TIMER_SCRIPT[pointer];
    const lastStepIndex = TIMER_SCRIPT.length;
    const { customSec } = currentStep;
    if (totalCounter === customSec) {
      setPointer((pointer) =>
        pointer + 1 < lastStepIndex ? pointer + 1 : pointer
      );
      playAudio(alert);
    }
  }, [pointer, totalCounter]);

  function startTimer() {
    setIsActive(!isActive);
    setIsPause((prev) => !prev);
    // setDoneAlert(false);
    toggle(true);
  }

  function stopTimer() {
    setIsActive(false);
    setIsPause(true);
    toggle(false);
    setDoneAlert(true);
  }

  function resetTimer() {
    setIsActive(false);
    setIsPause(true);
    setTotalCounter(0);
    setPointer(0);
    setDoneAlert(true);
    // toggle(false);
  }

  const playAudio = (src) => {
    new Audio(src).play();
  };

  if (doneAlert) {
    playAudio(done);
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
  const customColor = timer.customColor[pointer].value;
  const customStep = timer.customStep[pointer];
  const customSec = timer.customSec[pointer];

  const nexrCustomStep =
    pointer === timer.customStep.length - 1
      ? ""
      : timer.customStep[pointer + 1];

  const totalSteps = timer.customSec.length;

  console.log(timer);

  // if(timer.endTime === totalCounter){
  //   clearInterval(intervalId)
  // };

  return (
    <>
      {timer && (
        <TimerContainer background={customColor}>
          <div className="steps-area">
            <div className="step-left">
              <div className="currentStep">{`NOW: ${customStep}`}</div>
              <div className="nextStep">
                {pointer !== timer.customStep.length - 1 &&
                  `next: ${nexrCustomStep}`}
              </div>
            </div>
            <div className="step-right">
              <div className="stepNumber">{`${pointer + 1}/${totalSteps}`}</div>
              <div>Steps</div>
            </div>
          </div>

          <div className="time">
            <span className="minute">
              {computedMinute}:{computedSecond}
            </span>
          </div>
          <div className="buttons">
            <button
              onClick={startTimer}
              className="start"
              // disabled={isActive ? true : false}
            >
              {!isActive ? "Start" : "Pause"}
            </button>

            <button
              onClick={stopTimer}
              className="pause"
              disabled={isActive ? false : true}
            >
              Stop
            </button>

            <button
              onClick={resetTimer}
              className="reset"
              disabled={!isActive ? false : true}
            >
              Reset
            </button>
          </div>
        </TimerContainer>
      )}
    </>
  );
};

export default Timer;
