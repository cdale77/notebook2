import React from "react";
import Renderer from "react-test-renderer";
import NoteEditor from "../../components/NoteEditor";

const note1 = { noteId: "abcd", noteId: "1234", text: "Foo" };

describe("NoteView", () => {
  describe("rendering", () => {
    describe("without a note", () => {
      it("should render without error", () => {
        const component = Renderer.create(
          <NoteEditor note={{}} updateNote={jest.fn()} />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot;
      });
    });

    describe("with a note", () => {
      it("should render without error", () => {
        const component = Renderer.create(
          <NoteEditor note={note1} updateNote={jest.fn()} />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot;
      });
    });
  });
});
