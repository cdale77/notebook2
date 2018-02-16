import React from "react";
import Renderer from "react-test-renderer";
import BookList from "../../components/BookList";

let bookList = [
  { bookId: "abcd", name: "Foo" },
  { bookId: "1234", name: "Bar" }
];

describe("BookList", () => {
  describe("rendering", () => {
    describe("with a book list", () => {
      it("should render without error", () => {
        const component = Renderer.create(
          <BookList
            bookList={bookList}
            createBook={jest.fn()}
            setCurrentBook={jest.fn()}
          />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot;
      });
    });

    describe("without a book list", () => {
      it("should render without error", () => {
        const component = Renderer.create(
          <BookList
            bookList={[]}
            createBook={jest.fn()}
            setCurrentBook={jest.fn()}
          />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot;
      });
    });
  });
});
