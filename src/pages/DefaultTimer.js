import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import { BigTimerlistLink, InsideTimerlistWrap } from "./AllTimerList";
import "firebase/firestore";
import { Link } from "react-router-dom";

import { HeaderH1 } from "../components/Input";
import { HeaderH2 } from "./NewTimer";

const DefaultTimer = ({ user }) => {
  const [timers, setTimers] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("timers")
      .where("isDefault", "==", true)
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
      <HeaderH1 marginbottom={"3%"} color={"#FFFFFF"}>
        Demo Timers
      </HeaderH1>
      {timers.map((timer) => {
        return (
          <>
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
            </BigTimerlistLink>
          </>
        );
      })}
      ;
    </>
  );
};

export default DefaultTimer;
