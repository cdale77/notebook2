import Constants from "../../Constants";
import BookReducer from "../../reducers/BookReducer";
import BookActions from "../../actions/BookActions";

const existingBook = {
  bookId: "abcd",
  name: "Bar"
};

const bookList = [existingBook];

const state = {
  currentBook: {},
  bookList: bookList
};

describe("BookReducer", () => {
  it("should return the default state with no match", () => {
    const returnedState = BookReducer(undefined, {});
    expect(returnedState).toEqual({});
  });

  it("should handle CREATE_BOOK_SUCCESS", () => {
    const newBook = {
      bookId: "1234",
      name: "Foo"
    };

    const newList = [newBook, existingBook];

    const returnedState = BookReducer(
      state,
      BookActions.createBookSuccess(newBook)
    );

    expect(returnedState).toEqual({
      currentBook: {},
      bookList: newList
    });
  });

  it("should handle CREATE_BOOK_FAILURE", () => {
    const returnedState = BookReducer(state, BookActions.createBookFailure());
    expect(returnedState).toEqual({
      currentBook: {},
      bookList: bookList
    });
  });

  it("should handle DESTROY_BOOK", () => {
    const returnedState = BookReducer(
      state,
      BookActions.destroyBook(existingBook.bookId)
    );
    expect(returnedState).toEqual({
      currentBook: {},
      bookList: []
    });
  });
});
