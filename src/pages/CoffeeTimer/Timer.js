import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import ReactLoading from "react-loading";
import {
  getDocOnSnapShot,
  getCollectionsFieldUpdate,
} from "../../utils/firebase";
import { swalLoginModal,timerFinishModal } from "../../utils/swals";
import bgm from "../../sounds/DonnieOzone-ReturnOfTheGucciGhost.mp3";
import doneSound from "../../sounds/done.mp3";
import resetSound from "../../sounds/reset.mp3";
import alertSound from "../../sounds/alert.mp3";
import { LoadingFixHeight, centerStyle } from "../../components/SubElements";
import { TimerContainer } from "../../components/ContainerAndWrap";
import renderTimerControl from "./components/renderTimerControl";
import renderStepAndTime from "./components/renderTimerStepAndTime";

const convertTotalCountTotimerString = (totalCounter) => {
  const secondCounter = totalCounter % 60;
  const minuteCounter = Math.floor(totalCounter / 60);
  let computedSecond =
    String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
  let computedMinute =
    String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;
  return { computedSecond, computedMinute };
};

const useAudio = (url, isMuted) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [audio, playing]);

  useEffect(() => {
    isMuted ? (audio.volume = 0) : (audio.volume = 0.3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMuted]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
      audio.pause();
    };
  }, [audio]);

  return [playing, toggle];
};

const Timer = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const history = useHistory();
  const { timerId } = useParams();
  const [timer, setTimer] = useState(null);
  const [isShareClick, setIsShareClick] = useState(false);

  const alertAudio = new Audio(alertSound);
  const resetAudio = new Audio(resetSound);
  const doneAudio = new Audio(doneSound);
  alertAudio.volume = 0.2;
  resetAudio.volume = 0.2;
  doneAudio.volume = 0.2;

  const [isActive, setIsActive] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [totalCounter, setTotalCounter] = useState(0);
  const [pointer, setPointer] = useState(0);
  const [doneAlert, setDoneAlert] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [playing, toggle] = useAudio(bgm, isMuted);

  useEffect(() => {
    const unsub = getDocOnSnapShot("timers", timerId, setTimer);
    return unsub;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        setTotalCounter((totalCounter) => totalCounter + 1);
        if (timer.endTime === totalCounter + 1) {
          setIsActive(false);
          setIsReset(false);
          toggle(false);
          timerFinishModal();
          setDoneAlert(true);
          setDoneAlert(false);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, totalCounter]);

  useEffect(() => {
    if (timer !== null) {
      const lastStepIndex = timer.customSec.length;
      if (totalCounter === timer.customSec[0] && timer.customSec[1]) {
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
    toggle(true);
    setIsActive(!isActive);
    setIsReset(false);
    setDoneAlert(false);
  }

  function stopTimer() {
    setDoneAlert(true);
    setIsReset(false);
    toggle(false);
    setIsActive(false);
    timerFinishModal();
  }

  async function handlePressStop() {
    await stopTimer();
    await setDoneAlert(false);
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

  if (!timer)
    return (
      <LoadingFixHeight>
        <div style={centerStyle}>
          <ReactLoading color="#FBD850" type="spinningBubbles" />
        </div>
      </LoadingFixHeight>
    );

  const customColor = timer.customColor[pointer]?.value;
  const customStep = timer.customStep[pointer];
  const nextCustomStep =
    pointer === timer.customStep.length - 1
      ? ""
      : timer.customStep[pointer + 1];
  const totalSteps = timer.customSec.length;

  function toggleCollect(activeInField, field) {
    if (!currentUser) {
      swalLoginModal("collect this timer.")
    } else {
      const uid = currentUser.uid;
      getCollectionsFieldUpdate("timers", timerId, field, activeInField, uid);
    }
  }

  const isCollected = timer.collectedBy?.includes(currentUser?.uid);

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
        <TimerContainer background={customColor}>
          {renderStepAndTime(
            isActive,
            handlePressLastPage,
            timer,
            customStep,
            pointer,
            nextCustomStep,
            totalSteps,
            computedMinute,
            computedSecond
          )}
          {renderTimerControl(
            isActive,
            resetTimer,
            handlePressStop,
            startTimer,
            isShareClick,
            setIsShareClick,
            onShareWindowClose,
            handleCopyUrl,
            isMuted,
            setIsMuted,
            isCollected,
            toggleCollect
          )}
        </TimerContainer>
      )}
    </>
  );
};

export default Timer;
