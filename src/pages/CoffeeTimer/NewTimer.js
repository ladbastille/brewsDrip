import { useState } from "react";
import { useSelector } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { getDocumentRef, getCreatedAt } from "../../utils/firebase";
import { HeaderH1, HeaderH2 } from "../../components/SubElements";
import {
  Flex100BetweenWrap,
  NewTimerContainer,
  StepAlertOptionWrap,
} from "../../components/ContainerAndWrap";
import { COLOR_OPTIONS, BREW_OPTIONS } from "./components/NewTimerOptions";
import renderNewTimerStep from "./components/renderNewTimerStep";
import renderEndTime from "./components/renderEndTime";
import renderNameAndColorAndMethod from "./components/renderNameAndColorAndMethod";
import renderSaveAndLoading from "./components/renderSaveAndLoading";
import checkStepSecEndTime from "./components/checkStepSecEndTime";

export const getSeconds = (inputValue) => {
  let parsedSecond = Math.abs(parseInt(inputValue));
  if (isNaN(parsedSecond)) {
    return "";
  } else {
    return parsedSecond;
  }
};

const NewTimer = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState();
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

  const checkSetNum = (e, isEndTime = false) => {
    const inputValue = e.target.value;
    const seconds = getSeconds(inputValue);
    let value;
    if (isEndTime) {
      value = seconds > 4000 ? 4000 : seconds;
    } else {
      value = seconds > 999 ? 999 : seconds;
    }
    setNumValues({ ...numValues, [e.target.name]: value });
  };

  function createNewTimer() {
    const documentRef = getDocumentRef("timers");
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
      createdAt: getCreatedAt(),
      author: {
        displayName: currentUser.displayName || "",
        photoURL: currentUser.photoURL || "",
        uid: currentUser.uid,
        email: currentUser.email,
      },
    };
    setIsLoading(true);
    documentRef.set(dataObj).then(() => {
      setIsLoading(false);
      Swal.fire("Awesome!", "You've created a timer!", "success");
      history.push("/timerlist");
    });
  }

  function onSubmit() {
    checkStepSecEndTime(numValues, createNewTimer);
  }

  const step1 = {
    nameValue: stepName1,
    nameOnChange: setStepName1,
    namePlaceholder: "Step 1",
    secValue: numValues.stepSec1,
    secName: "stepSec1",
    colorValue: stepColor1,
    colorSetValue: setStepColor1,
  };

  const step2 = {
    nameValue: stepName2,
    nameOnChange: setStepName2,
    namePlaceholder: "Step 2",
    secValue: numValues.stepSec2,
    secName: "stepSec2",
    colorValue: stepColor2,
    colorSetValue: setStepColor2,
  };

  const step3 = {
    nameValue: stepName3,
    nameOnChange: setStepName3,
    namePlaceholder: "Step 3",
    secValue: numValues.stepSec3,
    secName: "stepSec3",
    colorValue: stepColor3,
    colorSetValue: setStepColor3,
  };

  const step4 = {
    nameValue: stepName4,
    nameOnChange: setStepName4,
    namePlaceholder: "Step 4",
    secValue: numValues.stepSec4,
    secName: "stepSec4",
    colorValue: stepColor4,
    colorSetValue: setStepColor4,
  };

  const stepArr = [step1, step2, step3, step4];

  return (
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

      {renderNameAndColorAndMethod(
        timerName,
        setTimerName,
        baseColor,
        setBaseColor,
        COLOR_OPTIONS,
        brewMethod,
        setBrewMethod,
        BREW_OPTIONS
      )}

      <HeaderH2 margin={"20px auto 10px"} fontSize={"1.5rem"}>
        Step Alert Option
      </HeaderH2>
      <StepAlertOptionWrap>
        <HeaderH2 fontSize={"1rem"}>Step Name</HeaderH2>
        <HeaderH2 fontSize={"1rem"}>Sec to Next Step</HeaderH2>
        <HeaderH2 fontSize={"1rem"}>Background Color</HeaderH2>
      </StepAlertOptionWrap>

      {stepArr.map((step, index) => {
        return (
          <div key={index}>
            {renderNewTimerStep(
              step.nameValue,
              step.nameOnChange,
              step.namePlaceholder,
              step.secValue,
              step.secName,
              step.colorValue,
              step.colorSetValue,
              checkSetNum,
              COLOR_OPTIONS
            )}
          </div>
        );
      })}

      {renderEndTime(numValues, checkSetNum)}
      {renderSaveAndLoading(onSubmit, isLoading)}
    </NewTimerContainer>
  );
};

export default NewTimer;
