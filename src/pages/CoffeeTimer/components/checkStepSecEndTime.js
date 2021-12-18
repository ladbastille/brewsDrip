import Swal from "sweetalert2";

const checkStepSecEndTime = (numValues, createNewTimer) => {
  let newValues = { ...numValues };
  delete newValues.endTime;
  const objectValues = Object.values(newValues);
  const valuesArr = objectValues.slice(0, objectValues.length - 1);

  for (let i = 0; i < valuesArr.length; i++) {
    const currentValue = valuesArr[i];
    const nextValue = valuesArr[i + 1];
    const lastValue = valuesArr[valuesArr.length - 1];
    if (i === 0 && (currentValue === 0 || currentValue === "")) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "First step sec can't be 0!",
      });
      return;
    }

    if (currentValue === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Step sec can't be 0!",
      });
      return;
    }

    if ((currentValue === 0 || currentValue === "") && nextValue) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter valid number step by step !",
      });
      return;
    }

    if ((currentValue === 0 || currentValue === "") && lastValue) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter valid number step by step!",
      });
      return;
    }

    if (
      (numValues.stepSec3 === 0 || numValues.stepSec3 === "") &&
      numValues.stepSec4
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter valid number step by step!",
      });
      return;
    }

    if (lastValue === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Last step can't be 0!",
      });
      return;
    }
  }

  if (
    numValues.endTime !== "" &&
    numValues.endTime < objectValues.reduce((a, b) => a + b)
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "End Time can't be smaller than total Step Time!",
    });
    return;
  }
  createNewTimer();
};

export default checkStepSecEndTime;
