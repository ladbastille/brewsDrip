import Dropdown from "./Dropdown";
import { HeaderH2, ShortInput } from "../../../components/SubElements";
import {
  StepAlertOptionWrap,
  DropdownWrap,
} from "../../../components/ContainerAndWrap";

const renderNameAndColorAndMethod = (
  timerName,
  setTimerName,
  baseColor,
  setBaseColor,
  COLOR_OPTIONS,
  brewMethod,
  setBrewMethod,
  BREW_OPTIONS
) => {
  return (
    <>
      <ShortInput
        placeholder="- ENTER TIMER NAME -"
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
    </>
  );
};

export default renderNameAndColorAndMethod;
