import React from "react";
import Renderer from "react-test-renderer";
import TestUtils from "react-dom/test-utils";
import TestWrapper from "../helpers/TestWrapper";
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

  describe("setting the current note", () => {
    it("should call the setCurrentNote function when clicked", () => {
      const callBack = {
        setCurrentNote: jest.fn()
      };

      const spy = jest.spyOn(callBack, "setCurrentNote");
      const component = TestUtils.renderIntoDocument(
        <TestWrapper>
          <NoteListing note={note} setCurrentNote={callBack.setCurrentNote} />
        </TestWrapper>
      );

      const listing = TestUtils.findRenderedDOMComponentWithClass(
        component,
        "note-listing"
      );

      TestUtils.Simulate.click(listing);

      expect(spy).toHaveBeenCalled();
      expect(callBack.setCurrentNote.mock.calls.length).toEqual(1);
    });
  });
});
