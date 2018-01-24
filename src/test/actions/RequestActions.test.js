import RequestActions from "../../actions/RequestActions";

describe("RequestActions", () => {
  it("should return the REQUEST_START action", () => {
    const result = RequestActions.requestStart("NEW_SESSION");
    expect(result).toEqual({
      type: "REQUEST_START",
      requestType: "NEW_SESSION"
    });
  });

  it("should return the REQUEST_END action", () => {
    const result = RequestActions.requestEnd("NEW_SESSION");
    expect(result).toEqual({
      type: "REQUEST_END",
      requestType: "NEW_SESSION"
    });
  });
});
