import SessionActions from "../../actions/SessionActions";

describe("SessionActions", () => {
  it("should return the proper CREATE_SESSION_SUCCESS action", () => {
    const result = SessionActions.createSessionSuccess("1234");
    expect(result).toEqual({
      type: "CREATE_SESSION_SUCCESS",
      uid: "1234"
    });
  });

  it("should return the proper CREATE_SESSION_FAILURE action", () => {
    const result = SessionActions.createSessionFailure("something went wrong");
    expect(result).toEqual({
      type: "CREATE_SESSION_FAILURE",
      message: "something went wrong"
    });
  });

  it("should return the proper DESTROY_SESSION action", () => {
    const result = SessionActions.destroySession();
    expect(result).toEqual({
      type: "DESTROY_SESSION"
    });
  });
});
