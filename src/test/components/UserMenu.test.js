import React from "react";
import Renderer from "react-test-renderer";
import TestUtils from "react-dom/test-utils";
import TestWrapper from "../helpers/TestWrapper";
import UserMenu from "../../components/UserMenu";

describe("UserMenu", () => {
  describe("rendering", () => {
    it("should render without error", () => {
      const component = Renderer.create(
        <UserMenu signOut={jest.fn()} clearCurrentBook={jest.fn()} />
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot;
    });
  });

  describe("logging out the user", () => {
    it("should fire the logout function", () => {
      const callBack = {
        signOut: () => {}
      };
      const spy = jest.spyOn(callBack, "signOut");
      const component = TestUtils.renderIntoDocument(
        <TestWrapper>
          <UserMenu signOut={callBack.signOut} clearCurrentBook={jest.fn()} />
        </TestWrapper>
      );

      const link = TestUtils.findRenderedDOMComponentWithClass(
        component,
        "signout-link"
      );

      TestUtils.Simulate.click(link);

      expect(spy).toHaveBeenCalled();
      expect(callBack.signOut.mock.calls.length).toEqual(1);
    });
  });
});
