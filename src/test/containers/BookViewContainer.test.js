import React from "react";
import Renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import BookViewContainer from "../../containers/BookViewContainer";
import Constants from "../../Constants";
import thunk from "redux-thunk";

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
let state = Constants.DEFAULT_STATE;

let book = { bookId: "abcd", name: "Foo" };

describe("BookView", () => {
  describe("rendering", () => {
    describe("with book", () => {
      it("should render without error", () => {
        state["books"] = {
          currentBook: book,
          bookList: [book]
        };

        const store = configureMockStore(middlewares)(state);

        const component = Renderer.create(
          <Provider store={store}>
            <BookViewContainer book={book} />
          </Provider>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot;
      });
    });
  });
});
