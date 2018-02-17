import React from "react";
import Renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import BookListContainer from "../../containers/BookListContainer";
import Constants from "../../Constants";
import thunk from "redux-thunk";

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
let state = Constants.DEFAULT_STATE;

let bookList = [
  { bookId: "abcd", name: "Foo" },
  { bookId: "1234", name: "Bar" }
];

describe("BookList", () => {
  describe("rendering", () => {
    describe("with a book list", () => {
      it("should render without error", () => {
        state["books"] = {
          currentBook: {},
          bookList: bookList
        };
        const store = configureMockStore(middlewares)(state);
        const component = Renderer.create(
          <Provider store={store}>
            <BookListContainer />
          </Provider>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot;
      });
    });

    describe("without a book list", () => {
      it("should render without error", () => {
        const store = configureMockStore(middlewares)(state);
        const component = Renderer.create(
          <Provider store={store}>
            <BookListContainer />
          </Provider>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot;
      });
    });
  });
});
