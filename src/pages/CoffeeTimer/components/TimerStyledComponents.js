import styled from "styled-components";
import { StyledIconDiv } from "../../../components/ContainerAndWrap";

export const BrewImg = styled.img`
  border-radius: 10px;
  visibility: ${(props) => (props.isActive ? "visible" : "hidden")};
`;

export const StepsBigFont = styled.h1`
  color: #ffffff;
  font-weight: 500;
  font-size: 2.5rem;
  margin: 5px 0;
`;

export const StepsSmallFont = styled.h1`
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 400;
`;

export const BigTimeFont = styled.h1`
  color: #ffffff;
  font-size: 11rem;
  font-weight: 500;
  margin: 0 auto 5px;
  @media (max-width: 375px) {
    margin: 0 auto 10px;
  }
`;

export const ControlBtn = styled.button`
  color: #ffffff;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const StyledIconDivSound = styled(StyledIconDiv)`
  @media (max-width: 1024px) {
    display: none;
  }
`;
