import React from "react";
import Renderer from "react-test-renderer";
import BookViewTitle from "../../components/BookViewTitle";

describe("BookListingView", () => {
  describe("rendering", () => {
    describe("without notes", () => {
      it("should render without error", () => {
        const component = Renderer.create(
          <BookViewTitle title={"Test Book"} />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot;
      });
    });
  });
});
