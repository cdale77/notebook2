import Constants from "../../Constants";
import SessionReducer from "../../reducers/SessionReducer";
import SessionActions from "../../actions/SessionActions";

describe("SessionReducer", () => {
  it("should return the default state with no match", () => {
    const returnedState = SessionReducer(undefined, {});
    expect(returnedState).toEqual({});
  });

  it("should handle CREATE_SESSION_SUCCESS", () => {
    const returnedState = SessionReducer(
      undefined,
      SessionActions.createSessionSuccess("1234")
    );
    expect(returnedState).toEqual({
      signedIn: true,
      uid: "1234"
    });
  });

  it("should handle CREATE_SESSION_FAILURE", () => {
    const msg = "Something went wrong";
    const returnedState = SessionReducer(
      undefined,
      SessionActions.createSessionFailure(msg)
    );
    expect(returnedState).toEqual({
      signedIn: false,
      uid: ""
    });
  });

  it("should handle DESTROY_SESSION", () => {
    const returnedState = SessionReducer(
      undefined,
      SessionActions.destroySession()
    );
    expect(returnedState).toEqual({
      signedIn: false,
      uid: ""
    });
  });
});
