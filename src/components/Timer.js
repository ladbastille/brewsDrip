import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
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
  /* background: grey; */
  padding: 1rem 2rem;
  border-radius: 10px;
  background: ${(props) => (props.background ? props.background : "grey")};
`;

const MOCK_SCRIPT = [
  {
    baseColor: "#FBD850",
    customStep: "step 1",
    customSec: 5,
  },
  {
    baseColor: "#EFABBA",
    customStep: "step 2",
    customSec: 10,
  },
  {
    baseColor: "#00B790",
    customStep: "step 3",
    customSec: 15,
  },
  {
    baseColor: "#B4CFCB",
    customStep: "step 4",
    customSec: 20,
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

// const useAudio = (url) => {
//   // const [audio] = useState(new Audio(url));
//   const audio = new Audio();
//   audio.src = bgm;
//   console.log(audio.play() instanceof Promise)
//   const [playingMusic, setPlayingMusic] = useState(false);

//   const checkIsPlay =
//     audio.currentTime > 0 &&
//     !audio.paused &&
//     !audio.ended &&
//     audio.readyState > audio.HAVE_CURRENT_DATA;
//   const toggle = () => {
//     if (!checkIsPlay) {
//       audio.play();
//       // setPlayingMusic(!playingMusic)
//     }
//   };

//   useEffect(() => {
//     playingMusic ? audio.play() : audio.pause();
//   }, [playingMusic]);

//   useEffect(() => {
//     audio.addEventListener("ended", () => setPlayingMusic(false));
//     return () => {
//       audio.removeEventListener("ended", () => setPlayingMusic(false));
//     };
//   }, []);

//   return [playingMusic, toggle];
// };

const Timer = () => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  // const audioCtx = new AudioContext();
  const [timers, setTimers] = useState([]);
  // const [playing, toggle] = useState(false);
  //   const [baseColor, setBaseColor] = useState("");
  //   const [baseTime, setBaseTime] = useState(0);
  //   const [currentTime, setCurrentTime] = useState(0);
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

  // useEffect(() => {
  //   firebase
  //     .firestore()
  //     .collection("timer")

  //     .get()
  //     .then((collectionSnapshot) => {
  //       const data = collectionSnapshot.docs.map((doc) => {
  //         return doc.data();
  //       });
  //       // setTopcis(data);
  //       console.log(data);
  //       console.log(data[0].baseColor);
  //       setTimers(data);
  //       // console.log(timers)
  //     });
  // }, []);

  const [playing, toggle] = useAudio(bgm);

  // let playBgm = new Audio(bgm);
  // const toggleBgm = (code) => {
  //   if (code === "startPlay") {
  //     playBgm.play();
  //   }
  //   if (code === "stopPlay") {
  //     this.playBgm.pause();
  //     this.playBgm.currentTime = 0;
  //   }
  // };
  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        setTotalCounter((totalCounter) => totalCounter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, totalCounter]);

  useEffect(() => {
    const currentStep = MOCK_SCRIPT[pointer];
    const lastStepIndex = MOCK_SCRIPT.length;
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
    setIsPause(false);
    setDoneAlert(false);
    toggle(true);
  }

  function pauseTimer() {
    setIsActive(false);
    setIsPause(true);
    setDoneAlert(true);
    toggle(false);
  }

  function stopTimer() {
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

  console.log(MOCK_SCRIPT[pointer]);

  const { baseColor, customStep } = MOCK_SCRIPT[pointer];
  const nexrCustomStep =
    pointer === MOCK_SCRIPT.length - 1
      ? ""
      : MOCK_SCRIPT[pointer + 1].customStep;
  const totalSteps = MOCK_SCRIPT.length;

  return (
    <TimerContainer background={baseColor}>
      <div className="steps-area">
        <div className="step-left">
          <div className="currentStep">{`NOW: ${customStep}`}</div>
          <div className="nextStep">
            {pointer !== MOCK_SCRIPT.length - 1 && `next: ${nexrCustomStep}`}
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
          onClick={pauseTimer}
          className="pause"
          disabled={isActive ? false : true}
        >
          Stop
        </button>

        <button
          onClick={stopTimer}
          className="reset"
          disabled={!isActive ? false : true}
        >
          Reset
        </button>
      </div>
    </TimerContainer>
  );
};

export default Timer;