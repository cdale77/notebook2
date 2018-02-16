import React from "react";
import Renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import AuthenticatedContainer from "../../containers/AuthenticatedContainer";
import Constants from "../../Constants";
import thunk from "redux-thunk";

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
let state = Constants.DEFAULT_STATE;

describe("AuthenticatedContainer", () => {
  describe("rendering", () => {
    it("should render without error", () => {
      const store = configureMockStore(middlewares)(state);
      const tree = Renderer.create(
        <Provider store={store}>
          <AuthenticatedContainer />
        </Provider>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("without a currrentBook set", () => {
    it("should render the BookList", () => {
      state["books"] = {
        currentBook: {},
        bookList: [{ bookId: "1234", name: "Foo" }]
      };
      const store = configureMockStore(middlewares)(state);
      const tree = Renderer.create(
        <Provider store={store}>
          <AuthenticatedContainer />
        </Provider>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("with a currrentBook set", () => {
    it("should render the BookView", () => {
      const book = { bookId: "1234", name: "Foo" };
      state["books"] = {
        currentBook: book,
        bookList: [book]
      };
      const store = configureMockStore(middlewares)(state);

      const tree = Renderer.create(
        <Provider store={store}>
          <AuthenticatedContainer />
        </Provider>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
