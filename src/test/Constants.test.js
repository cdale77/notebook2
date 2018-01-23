import Constants from "../Constants";
describe("Constants", () => {
  describe("default state", () => {
    it("should return the correct default state", () => {
      const expected = {};

      expect(Constants.DEFAULT_STATE).toEqual(expected);
    });
  });
});
