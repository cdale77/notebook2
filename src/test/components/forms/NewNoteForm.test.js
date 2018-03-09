import React from "react";
import Renderer from "react-test-renderer";
import TestUtils from "react-dom/test-utils";
import NewNoteForm from "../../../components/forms/NewNoteForm";

describe("NewNoteForm", () => {
  describe("rendering", () => {
    it("should render the form", () => {
      const component = Renderer.create(<NewNoteForm onSubmit={jest.fn()} />);

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("form expander", () => {
    it("should change the state when the trigger is clicked", () => {
      const component = TestUtils.renderIntoDocument(
        <NewNoteForm onSubmit={jest.fn()} />
      );

      // it should not be expanded by default
      expect(component.state.expanded).toEqual(false);

      const trigger = TestUtils.findRenderedDOMComponentWithClass(
        component,
        "new-note-expander"
      );

      TestUtils.Simulate.click(trigger);

      // now it should be expanded
      expect(component.state.expanded).toEqual(true);
    });
  });

  describe("submitting the form", () => {
    it("should call the submit function", () => {
      const callBack = {
        onSubmit: () => {}
      };

      const spy = jest.spyOn(callBack, "onSubmit");
      const component = TestUtils.renderIntoDocument(
        <NewNoteForm onSubmit={callBack.onSubmit} />
      );

      const button = TestUtils.findRenderedDOMComponentWithClass(
        component,
        "button"
      );

      const nameField = TestUtils.findRenderedDOMComponentWithClass(
        component,
        "input-name"
      );

      // enter values in the fields to trigger the state change callbacks
      nameField.value = "New note";
      TestUtils.Simulate.change(nameField);

      TestUtils.Simulate.click(button);

      expect(spy).toHaveBeenCalled();
      expect(callBack.onSubmit.mock.calls.length).toEqual(1);

      const form = { name: "New note" };
      expect(callBack.onSubmit.mock.calls).toEqual([[form]]);
    });
  });
});
