import React from "react";
import Renderer from "react-test-renderer";
import { Provider } from "react-redux";
import SignInContainer from "../../containers/SignInContainer";
import configureMockStore from "redux-mock-store";
import Constants from "../../Constants";

describe("SignInContainer", () => {
  const store = configureMockStore()(Constants.DEFAULT_STATE);
  describe("rendering", () => {
    it("should render without error", () => {
      const tree = Renderer.create(
        <Provider store={store}>
          <SignInContainer />
        </Provider>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
