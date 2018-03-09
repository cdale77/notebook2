import React from "react";
import Renderer from "react-test-renderer";
import TestUtils from "react-dom/test-utils";
import NewBookForm from "../../../components/forms/NewBookForm";

describe("NewBookForm", () => {
  describe("rendering", () => {
    it("should render the form", () => {
      const component = Renderer.create(<NewBookForm onSubmit={jest.fn()} />);

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("submitting the form", () => {
    it("should call the submit function", () => {
      const callBack = {
        onSubmit: () => {}
      };

      const spy = jest.spyOn(callBack, "onSubmit");
      const component = TestUtils.renderIntoDocument(
        <NewBookForm onSubmit={callBack.onSubmit} />
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
      nameField.value = "New book";
      TestUtils.Simulate.change(nameField);

      TestUtils.Simulate.click(button);

      expect(spy).toHaveBeenCalled();
      expect(callBack.onSubmit.mock.calls.length).toEqual(1);

      const form = { name: "New book" };
      expect(callBack.onSubmit.mock.calls).toEqual([[form]]);
    });
  });
});
