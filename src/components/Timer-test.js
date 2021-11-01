import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import "firebase/firestore";
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
  background: ${(props) => props.background};
`;

const Timer = () => {
  const [timers, setTimers] = useState([]);
  //   const [baseColor, setBaseColor] = useState("");
  //   const [baseTime, setBaseTime] = useState(0);
  //   const [currentTime, setCurrentTime] = useState(0);
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    firebase
      .firestore()
      .collection("timer")
      //   .doc()
      .get()
      .then((collectionSnapshot) => {
        const data = collectionSnapshot.docs.map((doc) => {
          return doc.data();
        });
        // setTopcis(data);
        console.log(data);
        console.log(data[0].baseColor);
        setTimers(data);
        // console.log(timers)
      });
  }, []);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  function stopTimer() {
    setIsActive(false);
    setCounter(0);
    setSecond("00");
    setMinute("00");
  }

  if (timers.length === 0) {
    return null;
  }

  return (
    <TimerContainer background={timers[0].baseColor}>
      <div className="time">
        <span className="minute">{minute}</span>
        <span>:</span>
        <span className="second">{second}</span>
      </div>
      <div className="buttons">
        <button onClick={() => setIsActive(!isActive)} className="start">
          {isActive ? "Pause" : "Start"}
        </button>
        <button onClick={stopTimer} className="reset">
          Reset
        </button>
      </div>
    </TimerContainer>
    // );
    // })}
  );
};

export default Timer;
