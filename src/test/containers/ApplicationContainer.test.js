import React from "react";
import TestUtils from "react-dom/test-utils";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import ApplicationContainer from "../../containers/ApplicationContainer";
import Constants from "../../Constants";
import thunk from "redux-thunk";

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
let state = Constants.DEFAULT_STATE;

describe("AppContainer", () => {
  describe("as an unauthenticated user", () => {
    state["session"] = { signedIn: false, accessToken: "" };
    const store = configureMockStore(middlewares)(state);
    it("should render the authentication form", () => {
      const component = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <ApplicationContainer />
        </Provider>
      );
    });
  });

  describe("as an authenticated user", () => {
    state["session"] = { signedIn: true, accessToken: "123" };
    const store = configureMockStore(middlewares)(state);
    it("should render the application", () => {
      const component = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <ApplicationContainer />
        </Provider>
      );
    });
  });
});
