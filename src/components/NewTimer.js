import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import firebase from "./../utils/firebase";

import Input, { HeaderH1 } from "./Input";
import Dropdown from "./Dropdown";
import { SubmitButton } from "./Signin";

const COLOR_OPTIONS = [
  {
    value: "#FBD850",
    label: "yellow",
  },
  {
    value: "#EFABBA",
    label: "pink",
  },
  {
    value: "#00B790",
    label: "green",
  },
  {
    value: "#B4CFCB",
    label: "mint",
  },
];

const BREW_OPTIONS = [
  {
    value: "aeroPress",
    label: "Aero Press",
  },
  {
    value: "pourOver",
    label: "Pour Over",
  },
  {
    value: "timer",
    label: "Timer",
  },
];

const NewTimer = () => {
  const [colorValue, setColorValue] = useState("");
  const [brewValue, setBrewValue] = useState("");
  const [stepColor1, setStepColor1] = useState("");
  const [stepColor2, setStepColor2] = useState("");
  const [stepColor3, setStepColor3] = useState("");
  const [stepColor4, setStepColor4] = useState("");
  

  return (
    <div>
      <HeaderH1>New Timer</HeaderH1>
      <Input placeholder="ENTER TIMER NAME"/>
      <h3>Method & Background Color</h3>
      <Dropdown
        value={colorValue}
        setValue={setColorValue}
        options={COLOR_OPTIONS}
        placeholder="-Choose background color-"
        valueIsColor
      />
      <Dropdown
        value={brewValue}
        setValue={setBrewValue}
        options={BREW_OPTIONS}
        placeholder="-Choose brew method-"
      />
      <h3>Step Alert Option</h3>
      <Input placeholder="Step Name"/>
      <Input placeholder="Secs"/>
      <Dropdown
        value={stepColor1}
        setValue={setStepColor1}
        options={COLOR_OPTIONS}
        placeholder="-Choose Alert Color-"
        valueIsColor
      />
      <Input placeholder="Step Name"/>
      <Input placeholder="Secs"/>
      <Dropdown
        value={stepColor2}
        setValue={setStepColor2}
        options={COLOR_OPTIONS}
        placeholder="-Choose Alert Color-"
        valueIsColor
      />
      <SubmitButton>Save</SubmitButton>
      <SubmitButton>Reset</SubmitButton>

    </div>
  );
};

export default NewTimer;
