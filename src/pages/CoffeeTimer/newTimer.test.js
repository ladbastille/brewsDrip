import { getSeconds } from "./NewTimer";

describe("getSecons", () => {
  it("should return 0 if second = 0", () => {
    const inputSecond = "0";
    expect(getSeconds(inputSecond)).toEqual(0);
  });
  it("should return 1 if second = -1", () => {
    const inputSecond = "-1";
    expect(getSeconds(inputSecond)).toEqual(1);
  });
  it("should return 1 if second = 1", () => {
    const inputSecond = "1";
    expect(getSeconds(inputSecond)).toEqual(1);
  });
  it('should return "" if second = "-"', () => {
    const inputSecond = "-";
    expect(getSeconds(inputSecond)).toEqual("");
  });
});
