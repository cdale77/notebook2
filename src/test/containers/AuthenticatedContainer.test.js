import React from "react";
import Renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import AuthenticatedContainer from "../../containers/AuthenticatedContainer";
import Constants from "../../Constants";
import thunk from "redux-thunk";

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
let state = Constants.DEFAULT_STATE;
const store = configureMockStore(middlewares)(state);

describe("AuthenticatedContainer", () => {
  describe("rendering", () => {
    it("should render without error", () => {
      const tree = Renderer.create(
        <Provider store={store}>
          <AuthenticatedContainer />
        </Provider>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
