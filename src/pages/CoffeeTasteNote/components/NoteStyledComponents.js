import styled from "styled-components";
import { Link } from "react-router-dom";
import { CTABtn } from "../../../components/SubElements";
import { Flex90BetweenWrap } from "../../../components/ContainerAndWrap";

export const NotesTagWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  border-radius: 10px;
`;

export const NotesTag = styled(Link)`
  background-color: #fbd850;
  opacity: 0.6;
  font-weight: bold;
  font-size: 1.3rem;
  text-align: center;
  border-radius: 50px;
  padding: 0.4rem 1.4rem;
  margin: 0;
  margin-bottom: ${(props) => (props.marginbottom ? props.marginbottom : "0")};
  color: ${(props) => (props.color ? props.color : "#000000")};
  &:hover {
    background-color: #fbd850;
    opacity: 1;
  }

  @media (min-width: 768px) {
    padding: 1.5rem 3rem;
    font-size: 2rem;
  }
`;

export const NoteTextarea = styled.textarea`
  border: transparent;
  border-radius: 10px;
  text-align: center;
  background-color: ${(props) => (props.readOnly ? "#fbd850" : "#ffffff")};
  cursor: ${(props) => (props.readOnly ? "default" : "edit")};
`;

export const EditBtn = styled(CTABtn)`
  border: transparent 2px solid;
  &:hover {
    color: #000000;
    transition: all 0.3s ease-out;
    background-color: ${(props) => props.color};
    border: #fff 2px solid;
  }
`;

export const FlexCenterWrap = styled(Flex90BetweenWrap)`
  justify-content: center;
  ${EditBtn} {
    margin-top: 0px;
    margin-right: 20px;
  }
  align-items: ${(props) => props.alighItems};
  position: ${(props) => props.position};
`;

export const UploadLabel = styled.label`
  background-color: #fbd850;
  border: 1px solid #ffffff;
  margin: 4px 3px 3px 3px;
  padding: 6px 8px;
  width: ${(props) => (props.width ? props.width : "70%")};
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
`;
