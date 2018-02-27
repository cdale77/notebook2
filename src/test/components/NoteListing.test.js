import React from "react";
import Renderer from "react-test-renderer";
import NoteListing from "../../components/NoteListing";

let note = { noteId: "abcd", bookId: "1234", name: "Foo", text: "Bar" };

describe("NoteListing", () => {
  describe("rendering", () => {
    describe("with a note", () => {
      it("should render without error", () => {
        const component = Renderer.create(
          <NoteListing note={{}} setCurrentNote={jest.fn()} />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot;
      });
    });

    describe("without a note", () => {
      it("should render without error", () => {
        const component = Renderer.create(
          <NoteListing note={note} setCurrentNote={jest.fn()} />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot;
      });
    });
  });
});
