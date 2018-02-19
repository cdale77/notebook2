import React from "react";
import Renderer from "react-test-renderer";
import NoteView from "../../components/NoteView";

const note1 = { noteId: "abcd", noteId: "1234", text: "Foo" };

describe("NoteView", () => {
  describe("rendering", () => {
    describe("without a note", () => {
      it("should render without error", () => {
        const component = Renderer.create(<NoteView note={{}} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot;
      });
    });

    describe("with a note", () => {
      it("should render without error", () => {
        const component = Renderer.create(<NoteView note={note1} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot;
      });
    });
  });
});
