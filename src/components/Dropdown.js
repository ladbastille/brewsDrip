import React, { useState } from "react";
import Input from "./Input";
import styled from "styled-components";

const Dropdown = ({
  placeholder = "",
  options,
  value,
  setValue,
  valueIsColor = false,
}) => {
  const [open, setOpen] = useState(false);
  

  return (
    <>
      <Input
        readOnly
        value={value.label}
        placeholder={placeholder}
        onClick={() => setOpen((prev) => !prev)}
        style={{ backgroundColor: valueIsColor ? value.value : "#eee" } }
      />
      {open && (
        <div>
          {options.map((item) => (
            
            <div
              style={{ backgroundColor: valueIsColor ? item.value : "#eee " }}
              value={item.value}
              onClick={() => {
                setValue(item);
                setOpen(false);
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Dropdown;
