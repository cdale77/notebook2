import React from "react";
import Renderer from "react-test-renderer";
import TestUtils from "react-dom/test-utils";
import TestWrapper from "../../helpers/TestWrapper";
import TextInput from "../../../components/forms/TextInput";

describe("TextInput", () => {
  describe("rendering", () => {
    it("should render an input", () => {
      const component = Renderer.create(
        <TextInput title="title" name="name" value="foo" onChange={jest.fn()} />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render an input with a default value", () => {
      const component = Renderer.create(
        <TextInput title="title" name="name" onChange={jest.fn()} />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render an password input", () => {
      const component = Renderer.create(
        <TextInput
          title="title"
          name="name"
          fieldType="password"
          value="foo"
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
            title="title"
            name="name"
            value="foo"
            onChange={callBack.onChange}
          />
        </TestWrapper>
      );
    });

    it("should fire the change function when the user types", () => {
      const field = TestUtils.findRenderedDOMComponentWithClass(
        component,
        "input-name"
      );

      field.value = "new value here";
      TestUtils.Simulate.change(field);

      expect(spy).toHaveBeenCalled();
      expect(callBack.onChange.mock.calls.length).toEqual(1);
    });
  });
});
