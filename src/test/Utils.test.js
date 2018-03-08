import React from "react";
import Utils from "../Utils";

describe("Utils", () => {
  describe("getUid", () => {
    // Store is not mocked so we're just testing the default return value.
    describe("while logged out", () => {
      it("should return a blank string", () => {
        expect(Utils.getUid()).toEqual("");
      });
    });
  });
});
