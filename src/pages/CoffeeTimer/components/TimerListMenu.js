import {
  HeaderH1,
  HeaderH2,
  StyledTimerlistLink,
} from "../../../components/SubElements";
import { TimersTagWrap, TimersTag } from "../AllTimerList";

function TimerListMenu() {
  return (
    <>
      <HeaderH1 margintop={"20px"} color={"#ffffff"}>
        Timer List
      </HeaderH1>
      <StyledTimerlistLink
        to="/newtimer"
        background={"#939597"}
        color={"#FFFFFF"}
      >
        <HeaderH2 color={"#FFFFFF"}>+ NEW TIMER</HeaderH2>
      </StyledTimerlistLink>
      <TimersTagWrap>
        <TimersTag to="/timerlist" marginbottom={"3%"} color={"#FFFFFF"}>
          All
        </TimersTag>
        <TimersTag
          to="/timerlist/default"
          marginbottom={"3%"}
          color={"#FFFFFF"}
        >
          Demo
        </TimersTag>
        <TimersTag
          to="/timerlist/collected"
          marginbottom={"3%"}
          color={"#FFFFFF"}
        >
          Collections
        </TimersTag>
        <TimersTag
          to="/timerlist/mytimers"
          marginbottom={"3%"}
          color={"#FFFFFF"}
        >
          My Timers
        </TimersTag>
      </TimersTagWrap>
    </>
  );
}

export default TimerListMenu;
