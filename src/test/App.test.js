import React from "react";
import TestUtils from "react-dom/test-utils";
import App from "../App";

describe("App", () => {
  it("should render without error", () => {
    const component = TestUtils.renderIntoDocument(<App />);
  });
});
