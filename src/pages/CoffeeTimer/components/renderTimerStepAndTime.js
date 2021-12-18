import { FaArrowLeft } from "react-icons/fa";
import timerGif from "../../../images/pourover.gif";
import { HeaderH2 } from "../../../components/SubElements";
import {
  Flex50ColumnWrap,
  Flex100BetweenWrap,
  FlexColumnWrap,
  Flex100AroundWrap,
  Flex100CenterWrap,
  StyledIconDiv,
} from "../../../components/ContainerAndWrap";
import {
  BrewImg,
  StepsBigFont,
  StepsSmallFont,
  BigTimeFont,
} from "./TimerStyledComponents";

const renderStepAndTime = (
  isActive,
  handlePressLastPage,
  timer,
  customStep,
  pointer,
  nextCustomStep,
  totalSteps,
  computedMinute,
  computedSecond
) => {
  return (
    <>
      <FlexColumnWrap>
        <Flex100BetweenWrap height={"50px"}>
          <StyledIconDiv>
            <FaArrowLeft
              color={"#ffffff"}
              size={"1.5rem"}
              style={{ alignSelf: "flex-start" }}
              onClick={handlePressLastPage}
            />
          </StyledIconDiv>
          <HeaderH2 color="#FFFFFF">{timer.timerName}</HeaderH2>
          {isActive && <BrewImg src={timerGif}></BrewImg>}
        </Flex100BetweenWrap>
        <Flex100AroundWrap>
          <Flex50ColumnWrap>
            <StepsBigFont>{customStep}</StepsBigFont>
            <StepsSmallFont>
              {pointer !== timer.customStep.length - 1 && nextCustomStep}
            </StepsSmallFont>
          </Flex50ColumnWrap>
          <Flex50ColumnWrap alignItems={"flex-end"}>
            <StepsBigFont>{`${pointer + 1}/${totalSteps}`}</StepsBigFont>
            <StepsSmallFont>STEP</StepsSmallFont>
          </Flex50ColumnWrap>
        </Flex100AroundWrap>
      </FlexColumnWrap>

      <Flex100CenterWrap>
        <BigTimeFont>
          {computedMinute}:{computedSecond}
        </BigTimeFont>
      </Flex100CenterWrap>
    </>
  );
};

export default renderStepAndTime;
