import React from "react";
import Renderer from "react-test-renderer";
import BookView from "../../components/BookView";

let book = { bookId: "abcd", name: "Foo" };
let currentNote = { noteId: "123", bookId: "abcd", name: "Note", text: "Bar" };
let noteList = [currentNote];

describe("BookView", () => {
  describe("rendering", () => {
    describe("without a book", () => {
      it("should render without error", () => {
        const component = Renderer.create(
          <BookView
            book={{}}
            noteList={[]}
            currentNote={{}}
            setCurrentNote={jest.fn()}
            updateNote={jest.fn()}
            createNote={jest.fn()}
          />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot;
      });
    });

    describe("with a book", () => {
      it("should render without error", () => {
        const component = Renderer.create(
          <BookView
            book={book}
            noteList={[]}
            currentNote={{}}
            setCurrentNote={jest.fn()}
            updateNote={jest.fn()}
            createNote={jest.fn()}
          />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot;
      });
    });
  });
});
