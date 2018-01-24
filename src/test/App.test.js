import React from "react";
import TestUtils from "react-dom/test-utils";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import App from "../App";

const store = configureMockStore()({
  session: {},
  flash: {}
});
describe("App", () => {
  it("should render without error", () => {
    const component = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
