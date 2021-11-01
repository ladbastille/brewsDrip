import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import firebase from "./../utils/firebase";

import Input, { HeaderH1 } from "./Input";
import Dropdown from "./Dropdown";

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

  return (
    <div>
      <Dropdown
        value={colorValue}
        setValue={setColorValue}
        options={COLOR_OPTIONS}
        placeholder="-Please choose an option--"
        valueIsColor
      />
      <Dropdown
        value={brewValue}
        setValue={setBrewValue}
        options={BREW_OPTIONS}
        placeholder="-Please choose an option--"
      />
    </div>
  );
};

export default NewTimer;
