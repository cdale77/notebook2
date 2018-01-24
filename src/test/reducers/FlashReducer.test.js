import Constants from "../../Constants";
import FlashReducer from "../../reducers/FlashReducer";
import FlashActions from "../../actions/FlashActions";

describe("FlashReducer", () => {
  it("should return the default state with no match", () => {
    const returnedState = FlashReducer(undefined, {});
    expect(returnedState).toEqual({});
  });

  it("should handle FLASH_SUCCESS", () => {
    const msg = "Flash success";
    const returnedState = FlashReducer(
      undefined,
      FlashActions.flashSuccess(msg)
    );
    expect(returnedState).toEqual({
      flashType: "success",
      message: msg
    });
  });

  it("should handle FLASH_ERROR", () => {
    const msg = "Flash error";
    const returnedState = FlashReducer(undefined, FlashActions.flashError(msg));
    expect(returnedState).toEqual({
      flashType: "error",
      message: msg
    });
  });

  it("should handle FLASH_CLEAR", () => {
    const returnedState = FlashReducer(undefined, FlashActions.flashClear());
    expect(returnedState).toEqual({
      flashType: "",
      message: ""
    });
  });
});
