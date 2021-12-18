export const handleOnKeyDown = (e) => {
  ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault();
};
