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

  it("should handle GET_BOOKS_SUCCESS", () => {
    const newBook = {
      bookId: "1234",
      name: "Foo"
    };

    const bookList = [newBook, existingBook];

    const returnedState = BookReducer(
      state,
      BookActions.getBooksSuccess(bookList)
    );

    expect(returnedState).toEqual({
      currentBook: {},
      bookList: bookList
    });
  });

  it("should handle GET_BOOKS_FAILURE", () => {
    const returnedState = BookReducer(
      state,
      BookActions.getBooksFailure("Something went wrong.")
    );

    expect(returnedState).toEqual({
      currentBook: {},
      bookList: bookList
    });
  });

  it("should handle CREATE_BOOK_FAILURE", () => {
    const returnedState = BookReducer(state, BookActions.createBookFailure());
    expect(returnedState).toEqual({
      currentBook: {},
      bookList: bookList
    });
  });

  it("should handle SET_CURRENT_BOOK", () => {
    const returnedState = BookReducer(
      state,
      BookActions.setCurrentBook(existingBook)
    );

    expect(returnedState).toEqual({
      currentBook: existingBook,
      bookList: bookList
    });
  });

  it("should handle CLEAR_CURRENT_BOOK", () => {
    state["currentBook"] = existingBook;
    const returnedState = BookReducer(state, BookActions.clearCurrentBook());

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
