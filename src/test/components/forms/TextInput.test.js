import React from "react";
import Renderer from "react-test-renderer";
import TestUtils from "react-dom/test-utils";
import TestWrapper from "../../helpers/TestWrapper";
import TextInput from "../../../components/forms/TextInput";

describe("TextInput", () => {
  describe("rendering", () => {
    it("should render an input", () => {
      const component = Renderer.create(
        <TextInput title="city" name="city" value="SF" onChange={jest.fn()} />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render an input with a default value", () => {
      const component = Renderer.create(
        <TextInput title="city" name="city" onChange={jest.fn()} />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render an password input", () => {
      const component = Renderer.create(
        <TextInput
          title="password"
          name="password"
          fieldType="password"
          value=""
          onChange={jest.fn()}
        />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("handling input", () => {
    let callBack, spy, component;

    beforeEach(() => {
      callBack = {
        onChange: () => {}
      };

      spy = jest.spyOn(callBack, "onChange");
      component = TestUtils.renderIntoDocument(
        <TestWrapper>
          <TextInput
            title="city"
            name="city"
            value="SF"
            onChange={callBack.onChange}
          />
        </TestWrapper>
      );
    });

    it("should fire the change function when the user adds input", () => {
      const field = TestUtils.findRenderedDOMComponentWithClass(
        component,
        "input-city"
      );

      field.value = "Berkeley";
      TestUtils.Simulate.change(field);

      expect(spy).toHaveBeenCalled();
      expect(callBack.onChange.mock.calls.length).toEqual(1);
    });
  });
});
