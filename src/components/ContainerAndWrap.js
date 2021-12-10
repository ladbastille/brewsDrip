import styled from "styled-components";

export const NewNoteContainer = styled.div`
  font-family: "Open Sans Condensed", sans-serif;
  background-color: #b4cfcb;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 768px;
  min-height: 480px;
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

export const InsideNotelistWrap = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  width: ${(props) => (props.width ? props.width : "100%")};
  justify-content: space-between;
  @media (max-width: 375px) {
    width: 95%;
  }
  & input:focus {
    background-color: #fbd850;
  }
`;

export const ThirdWrap = styled(InsideNotelistWrap)`
  width: ${(props) => props.width};
  @media (max-width: 375px) {
    width: 100%;
  }
`;

export const SecondWrap = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  margin: ${(props) => (props.margin ? props.margin : "20px 0")};
  width: ${(props) => (props.width ? props.width : "70%")};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-wrap: ${(props) => props.flexWrap};
`;

export const RatingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px 10px;
  input[type="radio"] {
    display: none;
  }
  .star {
    ${({ readOnly }) => (readOnly ? "" : "cursor:pointer")};
    transition: color 200ms;
  }
`;

export const FlexColumnWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1% auto;
`;

export const Flex100BetweenWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Flex100AroundWrap = styled(Flex100BetweenWrap)`
  justify-content: space-around;
`;

export const Flex100CenterWrap = styled(Flex100BetweenWrap)`
  justify-content: center;
`;

export const Flex50ColumnWrap = styled(FlexColumnWrap)`
  width: 50%;
`;

export const Flex90BetweenWrap = styled(Flex100BetweenWrap)`
  width: 90%;
  margin: ${(props) => props.margin || "5%"};
`;

export const TimerContainer = styled.div`
  font-family: "Open Sans Condensed", sans-serif;
  width: 100%;
  max-width: 768px;
  box-sizing: border-box;
  overflow: hidden;
  margin: 5px auto 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  border-radius: 10px;
  background: ${(props) => (props.background ? props.background : "#FBD850")};
`;

export const StyledIconDiv = styled.div`
  color: #ffffff;
  cursor: pointer;
  background: transparent;
  border: none;
`;

export const ShareBtnDiv = styled(StyledIconDiv)`
  margin-top: 15px;
  width: 120px;
  position: absolute;
  svg {
    margin-left: 8px;
  }
  @media (max-width: 768px) {
    margin-top: 5px;
  }
`;

export const FooterContainer = styled.div`
  font-family: "Poppins", sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fbd850;
  border-radius: 3px;
  display: inline-block;
  padding-top: 1rem;
  margin-top: 1rem;
`;

export const FooterContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: #939597 1px solid;
  @media (max-width: 1440px) {
    justify-content: space-around;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  h5 {
    margin-left: 3%;
    margin-top: 10px;
    color: #646464;
    @media (max-width: 1440px) {
      margin-right: 5%;
    }
  }
`;

export const FooterLinksWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
  @media (max-width: 1024px) {
    justify-content: center;
  }
  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 3%;
  }
`;

export const SNSLinksWrap = styled(FooterLinksWrap)`
  display: flex;
  flex-wrap: no-wrap;
  margin-top: 10px;
  margin-right: 3%;
  height: 50px;
  h6 {
    margin-right: 20px;
    margin-bottom: 5px;
    color: #646464;
  }
  @media (max-width: 1024px) {
    justify-content: flex-end;
  }
  @media (max-width: 1440px) {
    margin-left: 40%;
  }
`;

export const FooterCTABtnWrap = styled(FooterLinksWrap)`
  flex-direction: column;
  justify-content: space-evenly;
  margin: 2%;
  @media (max-width: 1024px) {
    flex-direction: row;
  }
  @media (max-width: 375px) {
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export const FooterShareBtnDiv = styled(ShareBtnDiv)`
  width: 120px;
  margin: 15px 0 0 0;
  padding-right: 20px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
  @media (min-width: 768px) {
    padding-right: 0px;
  }
`;

export const NewTimerContainer = styled.div`
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

export const DropdownWrap = styled.div`
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

export const StepAlertOptionWrap = styled.div`
  position:${(props)=>props.position};
  display: flex;
  width: 100%;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : ""};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : ""};
`;
