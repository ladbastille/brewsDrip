import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledIconDiv } from "./ContainerAndWrap";

export const SigninContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  transform: ${(props) => props.active && `translateX(100%)`};
  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const StyledForm = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
  @media (max-width: 425px) {
    background: #ffb75e;
    background: -webkit-linear-gradient(to right, #ed8f03, #ffb75e);
    background: linear-gradient(to right, #ed8f03, #ffb75e);
  }
`;

export const HeaderH1 = styled.h1`
  font-weight: bold;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "2rem")};
  text-align: center;
  margin: 0;
  margin-bottom: ${(props) => props.marginbottom};
  margin-top: ${(props) => props.margintop};
  color: ${(props) => (props.color ? props.color : "#000000")};
`;

export const HeaderH2 = styled(HeaderH1)`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.2rem")};
  margin: ${(props) => (props.margin ? props.margin : "2% auto")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  height: ${(props) => props.height};
`;

export const NoteTitle = styled(HeaderH2)`
  margin: 0;
  @media (max-width: 425px) {
    margin: 4% 0;
  }
`;

export const SocialLoginButton = styled.i`
  margin-right: 1rem;
`;

export const StyledInput = styled.input`
  background-color: #fbd850;
  border: 1px solid #ffffff;
  margin: 4px 3px 3px 3px;
  padding: ${(props) => (props.padding ? props.padding : "10px 8px")};
  width: ${(props) => (props.width ? props.width : "70%")};
  border-radius: 10px;
`;

export const SubmitButton = styled.button`
  border-radius: 10px;
  border: 1px solid #de6932;
  background-color: #de6932;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  margin-top: 10px;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
`;

export const SignupButton = styled(SubmitButton)`
  display: none;
  margin-top: 8px;
  background-color: #ed8f03;
  border-color: #ffffff;
  padding: 12px 43px;
  @media (max-width: 425px) {
    display: block;
  }
`;

export const Input = ({ onChange, type, placeholder, value, ...props }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export const ShortInput = styled(Input)`
  width: 50%;
  align-content: center;
  margin: 4% auto;
  font-family: Poppins, Arial, Helvetica, sans-serif;
`;

export const TasteInput = styled(Input)`
  width: 65%;
  align-content: center;
  margin: 2% 3%;
  padding: 5px 10px;
  font-family: Poppins, Arial, Helvetica, sans-serif;
  background-color: ${(props) => (props.readOnly ? "#fbd850" : "#ffffff")};
  cursor: ${(props) => (props.readOnly ? "default" : "edit")};
  @media (max-width: 375px) {
    width: 115px;
  }
`;

export const PreviewImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  margin-right: 40px;
  @media (max-width: 375px) {
    margin-right: 25px;
  }
`;

export const SimplePreviewImage = styled.img`
  max-width: 100%;
`;

export const ImgWrap = styled.div`
  width: ${(props) => (props.width ? props.width : "160px")};
  height: auto;
  display: flex;
  justify-content: center;
  padding-right: ${(props) =>
    props.paddingRight ? props.paddingRight : "10%"};
  @media (max-width: 375px) {
    width: 110px;
  }
`;

export const StyledTimerlistLink = styled(Link)`
  font-family: "Open Sans Condensed", sans-serif;
  background-color: ${(props) =>
    props.background ? props.background : "#FBD850"};
  color: #ffffff;
  margin: 4% auto;
  border-radius: 10px;
  border: 6px solid transparent;
  padding: ${(props) => (props.padding ? props.padding : "10px 20px")};
  width: ${(props) => (props.width ? props.width : "50%")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  &:hover {
    border: 6px solid #de6932;
  }
`;

export const ListContainer = styled.div`
  font-family: "Open Sans Condensed", sans-serif;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480 px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 10px;
  box-sizing: border-box;
`;

export const EditIconDiv = styled(StyledIconDiv)`
  position: absolute;
  background: #d42927;
  border-radius: 50px;
  padding: 3px;
  top: 0;
  right: 0;
  margin: -18px -15px 0 0;
  display: none;
`;

export const NoteEditIconDiv = styled(EditIconDiv)`
  margin: -18px -20px 0 0;
`;

export const BiglistLink = styled.div`
  font-family: "Open Sans Condensed", sans-serif;
  color: #ffffff;
  margin: 4% auto;
  border-radius: 10px;
  border: 6px solid transparent;
  padding: ${(props) => (props.padding ? props.padding : "10px 20px")};
  width: ${(props) => (props.width ? props.width : "50%")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  padding: 16px 20px;
  display: flex;
  flex-direction: row;
  margin: 1% auto;
  width: 85%;
  position: relative;

  &:hover {
    border: 6px solid #de6932;
  }

  &:hover ${NoteEditIconDiv} {
    display: block;
  }
`;

export const InsideListWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : "85%")};
  align-items: flex-end;
  justify-content: space-around;
`;
export const TutorialsBtn = styled.button`
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  font-weight: 700;
  color: #ffffff;
  background-color: #de6932;
  border-radius: 10px;
  outline: none;
  padding: 12px 45px;
  transition: all 0.3s ease-out;
  font-size: 0.9rem;
  border: none;
  @media (min-width: 1024px) {
    &:hover {
      color: #000000;
      transition: all 0.3s ease-out;
      background-color: transparent;
      border: #de6932 2px solid;
    }
  }

  @media (max-width: 375px) {
    padding: 10px 30px;
  }
`;

export const CTABtn = styled(TutorialsBtn)`
  padding: 10px 40px;
  margin-top: 10px;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "10px")};
  text-align: center;
  background: ${(props) => (props.color ? props.color : "#de6932")};
  border: ${(props) => (props.border ? props.border : "2px solid transparent")};

  @media (min-width: 1024px) {
    &:hover {
      border-color: ${(props) => props.color};
    }
    &:hover a {
      color: #000000;
    }
  }
  & a {
    color: #ffffff;
  }
  & a:visited {
    color: #ffffff;
  }
`;

export const LoadingFixHeight = styled.div`
  position: relative;
  height: 556px;
  @media (min-width: 768px) {
    height: 647px;
  }
  @media (min-width: 1440px) {
    height: 652px;
  }
`;

export const centerStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
