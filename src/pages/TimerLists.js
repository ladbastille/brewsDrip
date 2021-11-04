import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import "firebase/firestore";
import { useLocation, Link } from "react-router-dom";

const TimerLists = () => {
  const [timers, setTimers] = useState([]);
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

        console.log(data);
        console.log(data[0].baseColor);
        setTimers(data);
        // console.log(timers)
      });
  }, []);
  return (
    <>
      <div>
        {timers.map((timer) => {
          return <h3 key={timer.id}>Timer ID: {timer.id}</h3>;
        })}
      </div>
      <Link to="/newtimer"><button>Create Timer</button></Link>
    </>
  );
};

export default TimerLists;
