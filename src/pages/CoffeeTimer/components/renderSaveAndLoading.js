import ReactLoading from "react-loading";
import { StepAlertOptionWrap } from "../../../components/ContainerAndWrap";
import { CTABtn } from "../../../components/SubElements";
import { centerStyle } from "../../../components/SubElements";

const renderSaveAndLoading = (onSubmit, isLoading) => {
  return (
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
  );
};

export default renderSaveAndLoading;
