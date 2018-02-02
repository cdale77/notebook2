import React from "react";
import Renderer from "react-test-renderer";
import Nav from "../../components/Nav";

describe("Nav", () => {
  describe("rendering", () => {
    describe("logged in", () => {
      it("should render the component with the UserMenu", () => {
        const component = Renderer.create(
          <Nav signedIn={true} signOut={jest.fn()} />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe("logged out", () => {
      it("should render the component without the UserMenu", () => {
        const component = Renderer.create(
          <Nav signedIn={false} signOut={jest.fn()} />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
