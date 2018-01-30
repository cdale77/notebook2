import React from "react";
import Renderer from "react-test-renderer";
import TestUtils from "react-dom/test-utils";
import TestWrapper from "../../helpers/TestWrapper";
import SubmitButton from "../../../components/forms/SubmitButton";

describe("SubmitButton", () => {
  describe("rendering", () => {
    it("should render a button", () => {
      const component = Renderer.create(
        <SubmitButton value="Login" onSubmit={jest.fn()} />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should have a default value", () => {
      const component = Renderer.create(<SubmitButton onSubmit={jest.fn()} />);

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should be disabled if errors are present", () => {
      const errors = {
        firstName: "required."
      };
      const component = Renderer.create(
        <SubmitButton onSubmit={jest.fn()} errors={errors} />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should be enabled if errors are not present", () => {
      const errors = {};
      const component = Renderer.create(
        <SubmitButton onSubmit={jest.fn()} errors={errors} />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("submitting", () => {
    it("should fire the submit callback when clicked", () => {
      const callBack = {
        onSubmit: () => {}
      };

      const spy = jest.spyOn(callBack, "onSubmit");
      const component = TestUtils.renderIntoDocument(
        <TestWrapper>
          <SubmitButton onSubmit={callBack.onSubmit} />
        </TestWrapper>
      );
      const button = TestUtils.findRenderedDOMComponentWithClass(
        component,
        "button"
      );

      TestUtils.Simulate.click(button);

      expect(spy).toHaveBeenCalled();
      expect(callBack.onSubmit.mock.calls.length).toEqual(1);
    });
  });
});
