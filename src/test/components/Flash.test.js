import React from "react";
import Renderer from "react-test-renderer";
import TestUtils from "react-dom/test-utils";
import TestWrapper from "../helpers/TestWrapper";
import Flash from "../../components/Flash";

describe("Flash", () => {
  describe("rendering", () => {
    it("should display when the message prop present", () => {
      const component = Renderer.create(
        <Flash closeFlash={jest.fn()} message="It worked!" />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should not display when the message is blank", () => {
      const component = Renderer.create(
        <Flash closeFlash={jest.fn()} message="" />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should not display when the message is not provided", () => {
      const component = Renderer.create(<Flash closeFlash={jest.fn()} />);

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should display when the message prop present", () => {
      const component = Renderer.create(
        <Flash closeFlash={jest.fn()} message="It worked!" />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("closing", () => {
    let callBack, spy, component;

    beforeEach(() => {
      jest.useFakeTimers();

      callBack = {
        closeFlash: () => {}
      };

      spy = jest.spyOn(callBack, "closeFlash");

      component = TestUtils.renderIntoDocument(
        <TestWrapper>
          <Flash closeFlash={callBack.closeFlash} message="It worked!" />
        </TestWrapper>
      );
    });

    it("should close after 2 seconds", () => {
      expect(spy).not.toHaveBeenCalled();

      // Run out timers
      jest.runAllTimers();

      expect(spy).toHaveBeenCalled();
      expect(callBack.closeFlash.mock.calls.length).toEqual(1);
    });

    it("should close when the close icon is clicked", () => {
      const closeIcon = TestUtils.findRenderedDOMComponentWithClass(
        component,
        "close-flash"
      );

      TestUtils.Simulate.click(closeIcon);

      expect(spy).toHaveBeenCalled();
      expect(callBack.closeFlash.mock.calls.length).toEqual(1);
    });
  });
});
