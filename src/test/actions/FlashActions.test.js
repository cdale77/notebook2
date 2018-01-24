import FlashActions from "../../actions/FlashActions";

describe("FlashActions", () => {
  it("should return the proper FLASH SUCCESS action", () => {
    const result = FlashActions.flashSuccess("some message");
    expect(result).toEqual({
      type: "FLASH_SUCCESS",
      message: "some message"
    });
  });

  it("should return the proper FLASH_ERROR action", () => {
    const result = FlashActions.flashError("some message");
    expect(result).toEqual({
      type: "FLASH_ERROR",
      message: "some message"
    });
  });

  it("should return the proper FLASH_CLEAR action", () => {
    const result = FlashActions.flashClear("some message");
    expect(result).toEqual({
      type: "FLASH_CLEAR"
    });
  });
});
