import React from "react";
import Renderer from "react-test-renderer";
import TestUtils from "react-dom/test-utils";
import SignInForm from "../../../components/forms/SignInForm";

describe("SignInForm", () => {
  describe("rendering", () => {
    it("should render the form", () => {
      const component = Renderer.create(<SignInForm onSubmit={jest.fn()} />);

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("form submission", () => {
    it("should call the submit function", () => {
      const callBack = {
        onSubmit: jest.fn()
      };

      const spy = jest.spyOn(callBack, "onSubmit");
      const component = TestUtils.renderIntoDocument(
        <SignInForm onSubmit={callBack.onSubmit} />
      );

      const button = TestUtils.findRenderedDOMComponentWithClass(
        component,
        "button"
      );

      const emailField = TestUtils.findRenderedDOMComponentWithClass(
        component,
        "input-email"
      );

      const pwField = TestUtils.findRenderedDOMComponentWithClass(
        component,
        "input-password"
      );

      // enter values in the fields to trigger the state change callbacks
      emailField.value = "newemail@example.org";
      pwField.value = "password";
      TestUtils.Simulate.change(emailField);
      TestUtils.Simulate.change(pwField);

      TestUtils.Simulate.click(button);

      expect(spy).toHaveBeenCalled();
      expect(callBack.onSubmit.mock.calls.length).toEqual(1);

      // In the test env the password is ""
      const form = { email: "newemail@example.org", password: "" };
      expect(callBack.onSubmit.mock.calls).toEqual([[form]]);
    });
  });
});
