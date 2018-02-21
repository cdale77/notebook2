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

  describe("submitting the form", () => {
    let callBack, spy, component;

    beforeEach(() => {
      callBack = {
        onSubmit: () => {}
      };

      spy = jest.spyOn(callBack, "onSubmit");
      component = TestUtils.renderIntoDocument(
        <NewNoteForm onSubmit={callBack.onSubmit} />
      );
    });

    it("should call the submit function", () => {
      const button = TestUtils.findRenderedDOMComponentWithClass(
        component,
        "button"
      );

      const nameField = TestUtils.findRenderedDOMComponentWithClass(
        component,
        "input-name"
      );

      // enter values in the fields to trigger the state change callbacks
      nameField.value = "changed";
      TestUtils.Simulate.change(nameField);

      TestUtils.Simulate.click(button);

      expect(spy).toHaveBeenCalled();
      expect(callBack.onSubmit.mock.calls.length).toEqual(1);

      const form = { name: "changed" };
      expect(callBack.onSubmit.mock.calls).toEqual([[form]]);
    });
  });
});
