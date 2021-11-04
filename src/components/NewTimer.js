import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import "firebase/firestore";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useLocation, Link } from "react-router-dom";
import Input, { HeaderH1 } from "./Input";
import Dropdown from "./Dropdown";
import { SubmitButton } from "./Signin";
import { FooterCTABtn } from "./Footer";

const COLOR_OPTIONS = [
  {
    value: "#FBD850",
    label: "yellow",
  },
  {
    value: "#EFABBA",
    label: "pink",
  },
  {
    value: "#00B790",
    label: "green",
  },
  {
    value: "#B4CFCB",
    label: "mint",
  },
];

const BREW_OPTIONS = [
  {
    value: "aeroPress",
    label: "Aero Press",
  },
  {
    value: "pourOver",
    label: "Pour Over",
  },
  {
    value: "timer",
    label: "Timer",
  },
];

const NewTimerContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const StepAlertOptionWrap = styled.div`
  display: flex;
  width: 70%;
`;

const NewTimer = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  // const initialState = {
  //   timerName: "",
  //   baseColor: "",
  //   endTime: "",
  //   brewMethod: ""
  // };

  const [timerName, setTimerName] = useState("");
  const [baseColor, setBaseColor] = useState("#FBD850");
  const [endTime, setEndTime] = useState("");
  const [brewMethod, setBrewMethod] = useState("");

  const [stepName1, setStepName1] = useState("");
  const [stepName2, setStepName2] = useState("");
  const [stepName3, setStepName3] = useState("");
  const [stepName4, setStepName4] = useState("");

  const [stepSec1, setStepSec1] = useState("");
  const [stepSec2, setStepSec2] = useState("");
  const [stepSec3, setStepSec3] = useState("");
  const [stepSec4, setStepSec4] = useState("");

  const [stepColor1, setStepColor1] = useState("");
  const [stepColor2, setStepColor2] = useState("");
  const [stepColor3, setStepColor3] = useState("");
  const [stepColor4, setStepColor4] = useState("");

  const [timers, setTimers] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("timer")
      .get()
      .then((collectionSnapshot) => {
        const data = collectionSnapshot.docs.map((doc) => {
          return doc.data();
        });
        setTimers(data);
      });
  }, []);

  // function resetInput() {
  //   document.querySelectorAll('input');
  //   this.setState({
  //   itemvalues: ""
  // });
  // };
  function stringToNumber(string) {
    // return Number(string);
    return parseInt(string, 10);
  }

  function checkSetEndTime(e) {
      let endTimeNumber = parseInt(e.target.value);
      if (endTimeNumber <= 0 || endTimeNumber == NaN) {
        // alert('Enter integers only')
        setEndTime("");
      } else {
        setEndTime(endTimeNumber);
      }
    }
  

  function createNewTimer() {
    setIsLoading(true);
    stringToNumber(endTime);
    // stringToNumber(endTime, stepSec1, stepSec2, stepSec3, stepSec4);
    const documentRef = firebase.firestore().collection("timerTest").doc();
    // const fileRef = firebase.storage().ref("post-images/" + documentRef.id);
    // const metadata = {
    //   contentType: file.type,
    // };
    // fileRef.put(file, metadata).then(() => {
    //   fileRef.getDownloadURL().then((imageUrl) => {
    let dataObj = {
      timerName,
      baseColor,
      brewMethod: brewMethod || "",
      endTime: parseInt(endTime),
      customColor: [stepColor1, stepColor2, stepColor3, stepColor4],
      customStep: [stepName1, stepName2, stepName3, stepName4],
      customSec: [
        stepSec1 || null,
        stepSec2 || null,
        stepSec3 || null,
        stepSec4 || null,
      ],
      createdAt: firebase.firestore.Timestamp.now(),
      author: {
        displayName: firebase.auth().currentUser.displayName || "",
        photoURL: firebase.auth().currentUser.photoURL || "",
        uid: firebase.auth().currentUser.uid,
        email: firebase.auth().currentUser.email,
      },
      // imageUrl,
    };
    console.log(dataObj);
    documentRef.set(dataObj).then(() => {
      setIsLoading(false);
      history.push("/timerlists");
    });
    //   });
    // });
  }

  return (
    <>
      <NewTimerContainer>
        <HeaderH1>Create New Timer</HeaderH1>
        <Input
          placeholder="ENTER TIMER NAME"
          value={timerName}
          onChange={(e) => setTimerName(e.target.value)}
        />
        <h3>Method & Background Color</h3>
        <Dropdown
          value={baseColor}
          setValue={setBaseColor}
          options={COLOR_OPTIONS}
          placeholder="-Choose background color-"
          valueIsColor
        />
        <Dropdown
          value={brewMethod}
          setValue={setBrewMethod}
          options={BREW_OPTIONS}
          placeholder="-Choose brew method-"
        />
        <h3>Step Alert Option</h3>
        <StepAlertOptionWrap>
          <Input
            value={stepName1}
            onChange={(e) => setStepName1(e.target.value)}
            placeholder="Step Name"
          />
          <Input
            type="number"
            onKeyPress={(e) => {
              return e.charCode >= 48;
            }}
            min="1"
            step="1"
            max="999"
            value={stepSec1}
            onChange={(e) => setStepSec1(e.target.value)}
            placeholder="At the sec"
          />
          <Dropdown
            value={stepColor1}
            setValue={setStepColor1}
            options={COLOR_OPTIONS}
            placeholder="-Choose Alert Color-"
            valueIsColor
          />
        </StepAlertOptionWrap>
        <StepAlertOptionWrap>
          <Input
            value={stepName2}
            onChange={(e) => setStepName2(e.target.value)}
            placeholder="Step Name"
          />
          <Input
            type="number"
            onKeyPress={(e) => {
              return e.charCode >= 48;
            }}
            min="1"
            step="1"
            max="999"
            value={stepSec2}
            onChange={(e) => setStepSec2(e.target.value)}
            placeholder="At the sec"
          />
          <Dropdown
            value={stepColor2}
            setValue={setStepColor2}
            options={COLOR_OPTIONS}
            placeholder="-Choose Alert Color-"
            valueIsColor
          />
        </StepAlertOptionWrap>

        <StepAlertOptionWrap>
          <Input
            value={stepName3}
            onChange={(e) => setStepName3(e.target.value)}
            placeholder="Step Name"
          />
          <Input
            type="number"
            onKeyPress={(e) => {
              return e.charCode >= 48;
            }}
            min="1"
            step="1"
            max="999"
            value={stepSec3}
            onChange={(e) => setStepSec3(e.target.value)}
            placeholder="At the sec"
          />
          <Dropdown
            value={stepColor3}
            setValue={setStepColor3}
            options={COLOR_OPTIONS}
            placeholder="-Choose Alert Color-"
            valueIsColor
          />
        </StepAlertOptionWrap>

        <StepAlertOptionWrap>
          <Input
            value={stepName4}
            onChange={(e) => setStepName4(e.target.value)}
            placeholder="Step Name"
          />
          <Input
            type="number"
            onKeyPress={(e) => {
              return e.charCode >= 48;
            }}
            min="1"
            step="1"
            max="999"
            value={stepSec4}
            onChange={(e) => setStepSec4(e.target.value)}
            placeholder="At the sec"
          />
          <Dropdown
            value={stepColor4}
            setValue={setStepColor4}
            options={COLOR_OPTIONS}
            placeholder="-Choose Alert Color-"
            valueIsColor
          />
        </StepAlertOptionWrap>

        <h3>End Time</h3>
        <Input
          type="number"
          // onKeyPress={(e) => {
          //   return e.charCode >= 47;
          // }}
          min="1"
          step="1"
          max="999"
          value={endTime}
          onChange={(e) => checkSetEndTime(e)}
          placeholder="secs (OPTIONAL)"
        />
        <FooterCTABtn width={"50px"} color={"#00B790"} onClick={createNewTimer}>
          Save
        </FooterCTABtn>
        {/* <FooterCTABtn width={"50px"} color={"#FF5741"} onClick={resetInput}>
          Reset
        </FooterCTABtn> */}
      </NewTimerContainer>
    </>
  );
};

export default NewTimer;
