import React from "react";
import Renderer from "react-test-renderer";
import TestUtils from "react-dom/test-utils";
import BookListing from "../../components/BookListing";
import TestWrapper from "../helpers/TestWrapper";

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

  describe("setting the current book", () => {
    it("should call the setCurrentBook function when clicked", () => {
      const callBack = {
        setCurrentBook: jest.fn()
      };

      const spy = jest.spyOn(callBack, "setCurrentBook");
      const component = TestUtils.renderIntoDocument(
        <TestWrapper>
          <BookListing book={book} setCurrentBook={callBack.setCurrentBook} />
        </TestWrapper>
      );

      const listing = TestUtils.findRenderedDOMComponentWithClass(
        component,
        "book-listing"
      );

      TestUtils.Simulate.click(listing);

      expect(spy).toHaveBeenCalled();
      expect(callBack.setCurrentBook.mock.calls.length).toEqual(1);
    });
  });
});
