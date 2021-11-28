import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import firebase from "../utils/firebase";
import "firebase/firestore";
import styled from "styled-components";
import Swal from "sweetalert2";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Input, { HeaderH1 } from "../components/Input";
import Dropdown from "../components/Dropdown";
import { FooterCTABtn } from "../components/Footer";
import { Flex100BetweenWrap } from "./Timer";

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
    value: "timer",
    label: "Timer",
  },
  {
    value: "aeroPress",
    label: "Aero Press",
  },
  {
    value: "pourOver",
    label: "Pour Over",
  },
];

const NewTimerContainer = styled.div`
  font-family: "Open Sans Condensed", sans-serif;
  background-color: #ccc;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  position: relative;
  overflow: hidden;
  max-width: 100%;
  min-height: 480 px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 10px;

  & ::placeholder {
    color: #001a3a;
    opacity: 0.5;
    text-align: center;
  }

  & input:focus {
    background: #ffffff;
  }
`;

const DropdownWrap = styled.div`
  font-family: "Open Sans Condensed", sans-serif;
  background-color: #fbd850;
  border-radius: 10px;
  overflow: hidden;
  width: ${(props) => (props.width ? props.width : "50%")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3px;
  position: relative;
  & input {
    background-color: #ffffff;
  }
`;

const StepAlertOptionWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : ""};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : ""};
`;

const ShortInput = styled(Input)`
  width: 50%;
  align-content: center;
  margin: 4% auto;
  font-family: Poppins, Arial, Helvetica, sans-serif;
`;

export const HeaderH2 = styled(HeaderH1)`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.2rem")};
  margin: ${(props) => (props.margin ? props.margin : "2% auto")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
`;

const NewTimer = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const history = useHistory();
  const [timerName, setTimerName] = useState("");
  const [baseColor, setBaseColor] = useState("");
  const [brewMethod, setBrewMethod] = useState("");

  const [stepName1, setStepName1] = useState("");
  const [stepName2, setStepName2] = useState("");
  const [stepName3, setStepName3] = useState("");
  const [stepName4, setStepName4] = useState("");

  const [stepColor1, setStepColor1] = useState("");
  const [stepColor2, setStepColor2] = useState("");
  const [stepColor3, setStepColor3] = useState("");
  const [stepColor4, setStepColor4] = useState("");

  const numInitialState = {
    endTime: "",
    stepSec1: "",
    stepSec2: "",
    stepSec3: "",
    stepSec4: "",
  };
  const [numValues, setNumValues] = useState(numInitialState);

  const checkSetNum = (e) => {
    const value = parseInt(e.target.value.replace(/\D/g, ""));
    setNumValues({ ...numValues, [e.target.name]: value });
  };

  useEffect(() => {
    if (numValues.endTime) {
      if (
        numValues.endTime <
        numValues.stepSec1 +
          numValues.stepSec2 +
          numValues.stepSec3 +
          numValues.stepSec4
      ) {
        window.alert("End Time must over Total Step Time");
      }
    }
  }, [
    numValues.endTime,
    numValues.stepSec1,
    numValues.stepSec2,
    numValues.stepSec3,
    numValues.stepSec4,
  ]);

  function createNewTimer() {
    if (
      numValues.endTime !== "" &&
      numValues.endTime <
        numValues.stepSec1 +
          numValues.stepSec2 +
          numValues.stepSec3 +
          numValues.stepSec4
    ) {
      window.alert("End Time must over Total Step Time");
      return;
    }
    const documentRef = firebase.firestore().collection("timers").doc();

    const customColorArr = [stepColor1, stepColor2, stepColor3, stepColor4];
    const customColorArrFiltered = customColorArr.filter(function (el) {
      return el !== null && el !== "";
    });
    const customStepArr = [stepName1, stepName2, stepName3, stepName4];
    const customStepArrFiltered = customStepArr.filter(function (el) {
      return el !== null && el !== "";
    });
    const customSecArr = [
      numValues.stepSec1,
      numValues.stepSec2,
      numValues.stepSec3,
      numValues.stepSec4,
    ];
    const customSecArrFiltered = customSecArr.filter(function (el) {
      return el !== null && el !== "";
    });

    let dataObj = {
      timerName: timerName || "Unnamed Timer",
      baseColor: baseColor || COLOR_OPTIONS[0],
      brewMethod: brewMethod || BREW_OPTIONS[0],
      endTime: parseInt(numValues.endTime) || null,
      customColor: customColorArrFiltered,
      customStep: customStepArrFiltered,
      customSec: customSecArrFiltered,

      createdAt: firebase.firestore.Timestamp.now(),
      author: {
        displayName: currentUser.displayName || "",
        photoURL: currentUser.photoURL || "",
        uid: currentUser.uid,
        email: currentUser.email,
      },
    };

    documentRef.set(dataObj).then(() => {
      Swal.fire("Awesome!", "You've created a timer!", "success");
      history.push("/timerlist");
    });
  }

  return (
    <>
      <NewTimerContainer>
        <Flex100BetweenWrap>
          <Link to="/timerlist">
            <FaArrowLeft
              color={"#000000"}
              size={"1.5rem"}
              style={{ alignSelf: "flex-start" }}
            />
          </Link>
        </Flex100BetweenWrap>
        <HeaderH1 marginbottom={"3%"}>Create New Timer</HeaderH1>
        <ShortInput
          placeholder="- ENTER TIMER NAME　-"
          value={timerName}
          onChange={(e) => setTimerName(e.target.value)}
        />
        <StepAlertOptionWrap>
          <DropdownWrap>
            <HeaderH2>Color in List</HeaderH2>
            <Dropdown
              value={baseColor}
              setValue={setBaseColor}
              options={COLOR_OPTIONS}
              placeholder="- Select Color -"
              valueIsColor
            />
          </DropdownWrap>
          <DropdownWrap>
            <HeaderH2>Timer Method</HeaderH2>
            <Dropdown
              value={brewMethod}
              setValue={setBrewMethod}
              options={BREW_OPTIONS}
              placeholder="- Select Method -"
            />
          </DropdownWrap>
        </StepAlertOptionWrap>

        <HeaderH2 margin={"20px auto 10px"} fontSize={"1.5rem"}>
          Step Alert Option
        </HeaderH2>
        <StepAlertOptionWrap>
          <HeaderH2 fontSize={"1rem"}>Step Name</HeaderH2>
          <HeaderH2 fontSize={"1rem"}>Sec to Next Step</HeaderH2>
          <HeaderH2 fontSize={"1rem"}>Background Color</HeaderH2>
        </StepAlertOptionWrap>
        <StepAlertOptionWrap>
          <Input
            width={"30%"}
            value={stepName1}
            onChange={(e) => setStepName1(e.target.value)}
            placeholder="Step 1"
          />
          <Input
            width={"10%"}
            type="number"
            onKeyPress={(e) => {
              return e.charCode >= 48;
            }}
            min="0"
            step="1"
            max="999"
            value={numValues.stepSec1}
            name="stepSec1"
            onChange={(e) => checkSetNum(e)}
            placeholder="Sec"
          />
          <DropdownWrap>
            <Dropdown
              width={"60%"}
              padding={"6px 12px"}
              value={stepColor1}
              setValue={setStepColor1}
              options={COLOR_OPTIONS}
              placeholder="- Select Color -"
              valueIsColor
            />
          </DropdownWrap>
        </StepAlertOptionWrap>
        <StepAlertOptionWrap>
          <Input
            width={"30%"}
            value={stepName2}
            onChange={(e) => setStepName2(e.target.value)}
            placeholder="Step 2"
          />
          <Input
            width={"10%"}
            type="number"
            onKeyPress={(e) => {
              return e.charCode >= 48;
            }}
            min="0"
            step="1"
            max="999"
            value={numValues.stepSec2}
            name="stepSec2"
            onChange={(e) => checkSetNum(e)}
            placeholder="Sec"
          />
          <DropdownWrap>
            <Dropdown
              width={"60%"}
              padding={"6px 12px"}
              value={stepColor2}
              setValue={setStepColor2}
              options={COLOR_OPTIONS}
              placeholder="- Select Color -"
              valueIsColor
            />
          </DropdownWrap>
        </StepAlertOptionWrap>
        <StepAlertOptionWrap>
          <Input
            width={"30%"}
            value={stepName3}
            onChange={(e) => setStepName3(e.target.value)}
            placeholder="Step 3"
          />
          <Input
            width={"10%"}
            type="number"
            onKeyPress={(e) => {
              return e.charCode >= 48;
            }}
            min="0"
            step="1"
            max="999"
            value={numValues.stepSec3}
            name="stepSec3"
            onChange={(e) => checkSetNum(e)}
            placeholder="Sec"
          />
          <DropdownWrap>
            <Dropdown
              width={"60%"}
              padding={"6px 12px"}
              value={stepColor3}
              setValue={setStepColor3}
              options={COLOR_OPTIONS}
              placeholder="- Select Color -"
              valueIsColor
            />
          </DropdownWrap>
        </StepAlertOptionWrap>
        <StepAlertOptionWrap>
          <Input
            width={"30%"}
            value={stepName4}
            onChange={(e) => setStepName4(e.target.value)}
            placeholder="Step 4"
          />
          <Input
            width={"10%"}
            type="number"
            onKeyPress={(e) => {
              return e.charCode >= 48;
            }}
            min="0"
            step="1"
            max="999"
            value={numValues.stepSec4}
            name="stepSec4"
            onChange={(e) => checkSetNum(e)}
            placeholder="Sec"
          />
          <DropdownWrap>
            <Dropdown
              width={"60%"}
              padding={"6px 12px"}
              value={stepColor4}
              setValue={setStepColor4}
              options={COLOR_OPTIONS}
              placeholder="- Select Color -"
              valueIsColor
            />
          </DropdownWrap>
        </StepAlertOptionWrap>
        <StepAlertOptionWrap justifyContent={"space-between"}>
          <HeaderH2>End Time</HeaderH2>
          <Input
            type="number"
            width={"55%"}
            min="1"
            step="1"
            max="999"
            value={numValues.endTime}
            name="endTime"
            onChange={(e) => checkSetNum(e)}
            placeholder="- Enter Secs (OPTIONAL) -"
          />
        </StepAlertOptionWrap>
        <StepAlertOptionWrap justifyContent={"center"}>
          <FooterCTABtn
            width={"50px"}
            color={"#00B790"}
            onClick={createNewTimer}
          >
            Save
          </FooterCTABtn>
        </StepAlertOptionWrap>
      </NewTimerContainer>
    </>
  );
};

export default NewTimer;
