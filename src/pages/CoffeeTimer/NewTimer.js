import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import ReactLoading from "react-loading";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import Dropdown from "./components/Dropdown";
import {
  Input,
  ShortInput,
  HeaderH1,
  HeaderH2,
  CTABtn,
} from "../../components/SubElements";
import {
  Flex100BetweenWrap,
  NewTimerContainer,
  DropdownWrap,
  StepAlertOptionWrap,
} from "../../components/ContainerAndWrap";
import { getDocumentRef, getCreatedAt } from "../../utils/firebase";
import { COLOR_OPTIONS, BREW_OPTIONS } from "./components/NewTimerOptions";

const EndTimeInput = styled(Input)`
  width: 46.5%;
  margin: 3px;
  @media (max-width: 375px) {
    width: 41.5%;
  }
`;

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
  const centerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
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

  const checkStepSecEndTime = (numValues) => {
    let newValues = { ...numValues };
    delete newValues.endTime;
    const objectValues = Object.values(newValues);
    const valuesArr = objectValues.slice(0, objectValues.length - 1);

    for (let i = 0; i < valuesArr.length; i++) {
      const currentValue = valuesArr[i];
      const nextValue = valuesArr[i + 1];
      const lastValue = valuesArr[valuesArr.length - 1];
      if (i === 0 && (currentValue === 0 || currentValue === "")) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "First step sec can't be 0!",
        });

        return;
      }

      if (currentValue === 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Step sec can't be 0!",
        });

        return;
      }

      if ((currentValue === 0 || currentValue === "") && nextValue) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please enter valid number step by step !",
        });

        return;
      }

      if ((currentValue === 0 || currentValue === "") && lastValue) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please enter valid number step by step!",
        });

        return;
      }

      if (
        (numValues.stepSec3 === 0 || numValues.stepSec3 === "") &&
        numValues.stepSec4
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please enter valid number step by step!",
        });

        return;
      }

      if (lastValue === 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Last step can't be 0!",
        });

        return;
      }
    }

    if (
      numValues.endTime !== "" &&
      numValues.endTime < objectValues.reduce((a, b) => a + b)
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "End Time can't be smaller than total Step Time!",
      });

      return;
    }
    createNewTimer();
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
    checkStepSecEndTime(numValues);
  }

  const handleOnKeyDown = (e) => {
    ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault();
  };

  const renderColorAndMethod = () => {
    return (
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
    );
  };

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

  const renderStep = (
    nameValue,
    nameOnChange,
    namePlaceholder,
    secValue,
    secName,
    colorValue,
    colorSetValue
  ) => {
    return (
      <StepAlertOptionWrap>
        <Input
          width={"30%"}
          value={nameValue}
          onChange={(e) => nameOnChange(e.target.value)}
          placeholder={namePlaceholder}
        />
        <Input
          width={"10%"}
          onKeyDown={handleOnKeyDown}
          value={secValue}
          name={secName}
          onChange={(e) => checkSetNum(e)}
          placeholder="Sec"
        />
        <DropdownWrap>
          <Dropdown
            width={"60%"}
            padding={"6px 12px"}
            value={colorValue}
            setValue={colorSetValue}
            options={COLOR_OPTIONS}
            placeholder="- Select Color -"
            valueIsColor
          />
        </DropdownWrap>
      </StepAlertOptionWrap>
    );
  };

  const renderEndTime = () => {
    return (
      <StepAlertOptionWrap justifyContent={"space-between"}>
        <HeaderH2>End Time (optional)</HeaderH2>
        <EndTimeInput
          value={numValues.endTime}
          name="endTime"
          onKeyDown={handleOnKeyDown}
          onChange={(e) => checkSetNum(e, true)}
          placeholder="- Enter Secs -"
        />
      </StepAlertOptionWrap>
    );
  };

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
          placeholder="- ENTER TIMER NAME -"
          value={timerName}
          onChange={(e) => setTimerName(e.target.value)}
        />

        {renderColorAndMethod()}

        <HeaderH2 margin={"20px auto 10px"} fontSize={"1.5rem"}>
          Step Alert Option
        </HeaderH2>
        <StepAlertOptionWrap>
          <HeaderH2 fontSize={"1rem"}>Step Name</HeaderH2>
          <HeaderH2 fontSize={"1rem"}>Sec to Next Step</HeaderH2>
          <HeaderH2 fontSize={"1rem"}>Background Color</HeaderH2>
        </StepAlertOptionWrap>

        {stepArr.map((step) => {
          return (
            <div key={uuidv4()}>
              {renderStep(
                step.nameValue,
                step.nameOnChange,
                step.namePlaceholder,
                step.secValue,
                step.secName,
                step.colorValue,
                step.colorSetValue
              )}
            </div>
          );
        })}

        {renderEndTime()}

        <StepAlertOptionWrap position={"relative"} justifyContent={"center"}>
          <CTABtn
            marginRight={"0"}
            width={"50px"}
            color={"#00B790"}
            onClick={onSubmit}
          >
            Save
          </CTABtn>
          {isLoading && (
            <div style={centerStyle}>
              <ReactLoading color="#FBD850" type="spinningBubbles" />
            </div>
          )}
        </StepAlertOptionWrap>
      </NewTimerContainer>
    </>
  );
};

export default NewTimer;
