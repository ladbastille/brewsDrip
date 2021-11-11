
import { FaArrowLeft } from "react-icons/fa";
import { HeaderH1 } from "./Input";
import { HeaderH2 } from "../pages/NewTimer";
import { TimerListContainer,StyledTimerlistLink,TimersTagWrap,TimersTag,BigTimerlistLink,InsideTimerlistWrap } from '../pages/AllTimerList';


function TimerListMenu (){
    return(
        <>
        <FaArrowLeft
          color={"#ffffff"}
          size={"1.5rem"}
          style={{ alignSelf: "flex-start" }}
        />
        <HeaderH1 color={"#ffffff"}>Timer List</HeaderH1>
        <StyledTimerlistLink
          to="/newtimer"
          background={"#939597"}
          color={"#FFFFFF"}
        >
          <HeaderH2 color={"#FFFFFF"}>+ NEW TIMER</HeaderH2>
        </StyledTimerlistLink>
        <TimersTagWrap>
        <TimersTag to="/timerlist" marginBottom={"3%"} color={"#FFFFFF"}>
          All
        </TimersTag>
        <TimersTag to="/timerlist/default" marginBottom={"3%"} color={"#FFFFFF"}>
          Default
        </TimersTag>
        <TimersTag to="/timerlist/collected" marginBottom={"3%"} color={"#FFFFFF"}>
          Collections
        </TimersTag>
        <TimersTag to="/timerlist/mytimers" marginBottom={"3%"} color={"#FFFFFF"}>
          My Timers
        </TimersTag>
        </TimersTagWrap>
        </>
    )
}

export default TimerListMenu;