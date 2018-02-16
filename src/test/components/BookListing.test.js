import React from "react";
import Renderer from "react-test-renderer";
import BookListing from "../../components/BookListing";

let book = { bookId: "abcd", name: "Foo" };

describe("BookListing", () => {
  describe("rendering", () => {
    describe("with a book", () => {
      it("should render without error", () => {
        const component = Renderer.create(
          <BookListing book={{}} setCurrentBook={jest.fn()} />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot;
      });
    });

    describe("without a book", () => {
      it("should render without error", () => {
        const component = Renderer.create(
          <BookListing book={book} setCurrentBook={jest.fn()} />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot;
      });
    });
  });
});
