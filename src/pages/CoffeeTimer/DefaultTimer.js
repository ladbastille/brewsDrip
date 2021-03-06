import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDefaultCollections } from "../../utils/firebase";
import { BigTimerlistLink } from "./AllTimerList";
import {
  HeaderH1,
  HeaderH2,
  InsideListWrap,
} from "../../components/SubElements";

const DefaultTimer = () => {
  const [timers, setTimers] = useState([]);

  useEffect(() => {
    getDefaultCollections("timers", setTimers);
  }, []);

  return (
    <>
      <HeaderH1 marginbottom={"3%"} color={"#FFFFFF"}>
        Demo Timers
      </HeaderH1>
      {timers.map((timer) => {
        return (
          <BigTimerlistLink
            key={timer.id}
            background={timer.baseColor.value}
            color={"#000000"}
          >
            <InsideListWrap as={Link} to={`/timer/${timer.id}`}>
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
            </InsideListWrap>
          </BigTimerlistLink>
        );
      })}
      ;
    </>
  );
};

export default DefaultTimer;
