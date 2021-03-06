import { useState } from "react";
import { Input } from "../../../components/SubElements";

const Dropdown = ({
  placeholder = "",
  options,
  value,
  setValue,
  valueIsColor = false,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Input
        readOnly
        value={value ? value.label : ""}
        placeholder={placeholder}
        onClick={() => setOpen((prev) => !prev)}
        style={{
          backgroundColor: valueIsColor ? value.value : "#eee",
        }}
        {...props}
      />
      {open && (
        <div>
          {options.map((item) => (
            <div
              key={item.value}
              style={{
                backgroundColor: valueIsColor ? item.value : "#eee ",
                width: "120px",
              }}
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
