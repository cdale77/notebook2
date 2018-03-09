import React from "react";
import Renderer from "react-test-renderer";
import TestUtils from "react-dom/test-utils";
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

  describe("saving note text", () => {
    it("should auto save after 3 seconds", () => {
      jest.useFakeTimers();

      const callBack = {
        onSubmit: jest.fn()
      };

      const spy = jest.spyOn(callBack, "onSubmit");
      const component = TestUtils.renderIntoDocument(
        <NoteEditor updateNote={callBack.onSubmit} />
      );

      const textarea = TestUtils.findRenderedDOMComponentWithClass(
        component,
        "note-text"
      );

      // enter values in the fields to trigger the state change callbacks
      textarea.value = "Cool new note";
      TestUtils.Simulate.change(textarea);

      expect(spy).not.toHaveBeenCalled();

      jest.runAllTimers();

      expect(spy).toHaveBeenCalled();
    });
  });
});
