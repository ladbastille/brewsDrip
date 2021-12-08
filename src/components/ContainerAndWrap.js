import styled from "styled-components";

export const NewNoteContainer = styled.div`
  font-family: "Open Sans Condensed", sans-serif;
  background-color: #b4cfcb;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  position: relative;
  width: 768px;
  max-width: 95%;
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
  @media (max-width: 375px) {
    width: 375px;
    max-width: 90%;
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
  & svg {
    margin-left: 8px;
  }
  @media (max-width: 768px) {
    margin-top: 5px;
  }
`;