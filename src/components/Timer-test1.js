import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import "firebase/firestore";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import "../components/timer.css";
import styled from "styled-components";

const TimerContainer = styled.div`
  width: 90%;
  height: 70vh;
  margin: 0 auto;
  display: grid;
  place-items: center;
  background: grey;
  padding: 1rem 2rem;
  border-radius: 10px;
  /* background: ${(props) => props.background}; */
`;

const Timer = () => {
  const cn = (...args) => {
    return args.filter((x) => x).join(" ");
  };

  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const id = window.setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      return () => window.clearInterval(id);
    }
    return undefined;
  }, [isRunning]);

  return (
    <TimerContainer>
      <div className="timer-app">
        <div className={cn("time-circle", !isRunning && "paused")}>
          <div className="time">{seconds}</div>
        </div>
        <div className="buttons">
          {isRunning ? (
            <button
              className="play-pause"
              onClick={() => {
                setIsRunning(false);
              }}
            >
              <FaPauseCircle />
            </button>
          ) : (
            <button className="play-pause" onClick={() => setIsRunning(true)}>
              <FaPlayCircle />
            </button>
          )}
          <button
            disabled={!isRunning}
            className="reset"
            onClick={() => {
              setIsRunning(false);
              setSeconds(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </TimerContainer>
  );
};

export default Timer;
