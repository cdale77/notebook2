import React from "react";
import Renderer from "react-test-renderer";
import BookView from "../../components/BookView";

let book = { bookId: "abcd", name: "Foo" };

describe("BookView", () => {
  describe("rendering", () => {
    describe("with book", () => {
      it("should render without error", () => {
        const component = Renderer.create(<BookView book={book} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot;
      });
    });
  });
});
