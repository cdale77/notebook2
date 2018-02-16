import BookActions from "../../actions/BookActions";
const book1 = {
  bookId: "1324",
  name: "Test"
};

describe("BookActions", () => {
  it("should return the proper CREATE_BOOK_SUCCESS action", () => {
    const result = BookActions.createBookSuccess(book1);
    expect(result).toEqual({
      type: "CREATE_BOOK_SUCCESS",
      book: book1
    });
  });

  it("should return the proper CREATE_BOOK_FAILURE action", () => {
    const result = BookActions.createBookFailure("something went wrong");
    expect(result).toEqual({
      type: "CREATE_BOOK_FAILURE",
      message: "something went wrong"
    });
  });

  it("should return the proper GET_BOOKS_SUCCESS action", () => {
    const book2 = {
      bookId: "abcd",
      name: "Foo"
    };

    const bookList = [book1, book2];

    const result = BookActions.getBooksSuccess(bookList);
    expect(result).toEqual({
      type: "GET_BOOKS_SUCCESS",
      bookList: bookList
    });
  });

  it("should return the proper GET_BOOKS_FAILURE action", () => {
    const result = BookActions.getBooksFailure("something went wrong");
    expect(result).toEqual({
      type: "GET_BOOKS_FAILURE",
      message: "something went wrong"
    });
  });

  it("should return the proper SET_CURRENT_BOOK action", () => {
    const result = BookActions.setCurrentBook(book1);
    expect(result).toEqual({
      type: "SET_CURRENT_BOOK",
      book: book1
    });
  });

  it("should return the proper CLEAR_CURRENT_BOOK action", () => {
    const result = BookActions.clearCurrentBook();
    expect(result).toEqual({
      type: "CLEAR_CURRENT_BOOK"
    });
  });

  it("should return the proper DESTROY_BOOK action", () => {
    const result = BookActions.destroyBook("abcd");
    expect(result).toEqual({
      type: "DESTROY_BOOK",
      bookId: "abcd"
    });
  });
});
