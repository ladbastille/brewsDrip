import Dropdown from "./Dropdown";
import { Input } from "../../../components/SubElements";
import {
  DropdownWrap,
  StepAlertOptionWrap,
} from "../../../components/ContainerAndWrap";
import { handleOnKeyDown } from "./handleKeyDown";

const renderNewTimerStep = (
  nameValue,
  nameOnChange,
  namePlaceholder,
  secValue,
  secName,
  colorValue,
  colorSetValue,
  checkSetNum,
  COLOR_OPTIONS
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

export default renderNewTimerStep;
