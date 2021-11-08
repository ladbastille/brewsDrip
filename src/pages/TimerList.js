import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import "firebase/firestore";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import { FaArrowLeft, FaRegHeart, FaHeart, FaEdit } from "react-icons/fa";
import { HeaderH1 } from "../components/Input";
import { HeaderH2 } from "./NewTimer";

const TimerListContainer = styled.div`
  font-family: "Open Sans Condensed", sans-serif;
  background-color: #001a3a;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480 px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* & ::placeholder {
    color: #001a3a;
    opacity: 0.5;
    text-align: center;
  }

  & input:focus {
    background: #ffffff;
  } */
`;

export const StyledTimerlistLink = styled(Link)`
  font-family: "Open Sans Condensed", sans-serif;
  background-color: ${(props) =>
    props.background ? props.background : "#FBD850"};
  color: #ffffff;
  /* margin: 4px 3px 3px 3px; */
  margin: 4% auto;
  padding: ${(props) => (props.padding ? props.padding : "10px 20px")};
  border-radius: 10px;
  width: ${(props) => (props.width ? props.width : "50%")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  &:hover{
    border: 6px solid #DE6932;
  }
`;

const BigTimerlistLink = styled(StyledTimerlistLink)`
  padding: 16px 20px;
  display: flex;
  flex-direction: row;
  margin: 1% auto;
  width: 85%;
`;

const InsideTimerlistWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : "90%")};
  align-items: flex-end;
  justify-content: space-around;
`;

const TimerList = () => {
  const [timers, setTimers] = useState([]);
  const [isLike, setIslike] = useState(true);

  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  const currentTimer = urlSearchParams.get('timers');
  const lastPostSnapshotRef = React.useRef();

  useEffect(() => {
    firebase
      .firestore()
      .collection("timers")
      //   .doc()
      .orderBy('createdAt', 'desc')
      .get()
      .then((collectionSnapshot) => {
        const data = collectionSnapshot.docs.map((docSnapshot) => {
          const id = docSnapshot.id;
          return { ...docSnapshot.data(), id };
        });
        lastPostSnapshotRef.current =
          collectionSnapshot.docs[collectionSnapshot.docs.length - 1];
        setTimers(data);
        console.log(data)
      });
  }, []);
  return (
    <>
      {/* <Link to="/newtimer"><button>Create Timer</button></Link>
      <div>
        {timers.map((timer) => {
          return <h3 key={timer.id}>Timer ID: {timer.id}</h3>;
        })}
      </div> */}
      <TimerListContainer>
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
        <HeaderH1 marginBottom={"3%"} color={"#FFFFFF"}>
          My Timers
        </HeaderH1>

{/* here: render timers */}

{timers.map((timer) => {
  return (
        <BigTimerlistLink
          key={timer.id}
          to={`/timerlist/${timer.id}`}
          background={timer.baseColor.value}
          color={"#000000"}
        >
          <InsideTimerlistWrap>
            <HeaderH2 margin={"1.5% auto 2% 1.5%"} fontSize={"1.8rem"}>
              {timer.timerName}
            </HeaderH2>
            <HeaderH2
              margin={"1.5% auto 2% 1.5%"}
              fontSize={"1.6rem"}
              color={"#ffffff"}
            >
              {`Steps at ${timer.customSec} secs`}
            </HeaderH2>
          </InsideTimerlistWrap>
          <InsideTimerlistWrap width={"10%"}>
            {!isLike ? (
              <FaRegHeart size={"1.5rem"} />
            ) : (
              <FaHeart size={"1.5rem"} />
            )}
            <FaEdit size={"1.5rem"} />
          </InsideTimerlistWrap>
        </BigTimerlistLink>)})}

        {/* <BigTimerlistLink
          to="/timer/:id?"
          background={"#B4CFCB"}
          color={"#000000"}
        >
          <InsideTimerlistWrap>
            <HeaderH2 margin={"1.5% auto 2% 1.5%"} fontSize={"1.8rem"}>
              Timer Name
            </HeaderH2>
            <HeaderH2
              margin={"1.5% auto 2% 1.5%"}
              fontSize={"1.6rem"}
              color={"#ffffff"}
            >
              00:00 01:00 03:00 04:30
            </HeaderH2>
          </InsideTimerlistWrap>

          <InsideTimerlistWrap width={"10%"}>
            {!isLike ? (
              <FaRegHeart size={"1.5rem"} />
            ) : (
              <FaHeart size={"1.5rem"} />
            )}
            <FaEdit size={"1.5rem"} />
          </InsideTimerlistWrap>
        </BigTimerlistLink>

        <BigTimerlistLink
          to="/timer/:id?"
          background={"#EFABBA"}
          color={"#000000"}
        >
          <InsideTimerlistWrap>
            <HeaderH2 margin={"1.5% auto 2% 1.5%"} fontSize={"1.8rem"}>
              Timer Name
            </HeaderH2>
            <HeaderH2
              margin={"1.5% auto 2% 1.5%"}
              fontSize={"1.6rem"}
              color={"#ffffff"}
            >
              00:00 01:00 03:00 04:30
            </HeaderH2>
          </InsideTimerlistWrap>{" "}
          <InsideTimerlistWrap width={"10%"}>
            {!isLike ? (
              <FaRegHeart size={"1.5rem"} />
            ) : (
              <FaHeart size={"1.5rem"} />
            )}
            <FaEdit size={"1.5rem"} />
          </InsideTimerlistWrap>
        </BigTimerlistLink> */}



        {/* default timer */}

        {/* <HeaderH2 margin={"2.5% auto"} fontSize={"1.9rem"} color={"#FFFFFF"}>
          Default Timers
        </HeaderH2>
        <BigTimerlistLink
          to="/timer/:id?"
          background={"#00B790"}
          color={"#000000"}
        >
          <InsideTimerlistWrap>
            <HeaderH2 margin={"1.5% auto 2% 1.5%"} fontSize={"1.8rem"}>
              Timer Name
            </HeaderH2>
            <HeaderH2
              margin={"1.5% auto 2% 1.5%"}
              fontSize={"1.6rem"}
              color={"#ffffff"}
            >
              00:00 01:00 03:00 04:30
            </HeaderH2>
          </InsideTimerlistWrap>
          <InsideTimerlistWrap width={"10%"}>
            {!isLike ? (
              <FaRegHeart size={"1.5rem"} />
            ) : (
              <FaHeart size={"1.5rem"} />
            )}
            <FaEdit size={"1.5rem"} />
          </InsideTimerlistWrap>
        </BigTimerlistLink> */}
      </TimerListContainer>
    </>
  );
};

export default TimerList;
