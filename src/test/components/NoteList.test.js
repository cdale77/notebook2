import React from "react";
import Renderer from "react-test-renderer";
import NoteList from "../../components/NoteList";

const note1 = { noteId: "abcd", noteId: "1234", text: "Foo" };
const note2 = { noteId: "xyz", noteId: "893", text: "Bar" };
const notes = [note1, note2];

describe("NoteView", () => {
  describe("rendering", () => {
    describe("without notes", () => {
      it("should render without error", () => {
        const component = Renderer.create(<NoteList notes={[]} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot;
      });
    });

    describe("with notes", () => {
      it("should render without error", () => {
        const component = Renderer.create(<NoteList notes={notes} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot;
      });
    });
  });
});
