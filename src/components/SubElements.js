import styled from "styled-components";

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
  padding-right: ${props=>props.paddingRight?props.paddingRight:"10%"};
  @media (max-width: 375px) {
    width: 110px;
  }
`;
