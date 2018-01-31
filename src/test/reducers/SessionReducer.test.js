import Constants from "../../Constants";
import SessionReducer from "../../reducers/SessionReducer";
import SessionActions from "../../actions/SessionActions";

describe("SessionReducer", () => {
  it("should return the default state with no match", () => {
    const returnedState = SessionReducer(undefined, {});
    expect(returnedState).toEqual({});
  });

  it("should handle NEW_SESSION_SUCCESS", () => {
    const returnedState = SessionReducer(
      undefined,
      SessionActions.newSessionSuccess()
    );
    expect(returnedState).toEqual({
      signedIn: true
    });
  });

  it("should handle NEW_SESSION_FAILURE", () => {
    const msg = "Something went wrong";
    const returnedState = SessionReducer(
      undefined,
      SessionActions.newSessionFailure(msg)
    );
    expect(returnedState).toEqual({
      signedIn: false
    });
  });

  it("should handle DESTROY_SESSION", () => {
    const returnedState = SessionReducer(
      undefined,
      SessionActions.destroySession()
    );
    expect(returnedState).toEqual({
      signedIn: false
    });
  });
});
