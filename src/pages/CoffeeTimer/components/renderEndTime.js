import styled from "styled-components";
import { Input, HeaderH2 } from "../../../components/SubElements";
import { StepAlertOptionWrap } from "../../../components/ContainerAndWrap";
import { handleOnKeyDown } from "./handleKeyDown";

const EndTimeInput = styled(Input)`
  width: 46.5%;
  margin: 3px;
  @media (max-width: 375px) {
    width: 41.5%;
  }
`;

const renderEndTime = (numValues, checkSetNum) => {
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

export default renderEndTime;
