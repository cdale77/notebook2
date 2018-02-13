import BookActions from "../../actions/BookActions";

describe("BookActions", () => {
  it("should return the proper CREATE_BOOK_SUCCESS action", () => {
    const book = {
      bookId: "1324",
      name: "Test"
    };
    const result = BookActions.createBookSuccess(book);
    expect(result).toEqual({
      type: "CREATE_BOOK_SUCCESS",
      book: book
    });
  });

  it("should return the proper CREATE_BOOK_FAILURE action", () => {
    const result = BookActions.createBookFailure("something went wrong");
    expect(result).toEqual({
      type: "CREATE_BOOK_FAILURE",
      message: "something went wrong"
    });
  });

  it("should return the proper DESTROY_BOOK action", () => {
    const result = BookActions.destroyBook();
    expect(result).toEqual({
      type: "DESTROY_BOOK"
    });
  });
});
