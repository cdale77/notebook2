import Constants from "../Constants";

const BookActions = {
  createBookSuccess: book => {
    return {
      type: Constants.ACTIONS.CREATE_BOOK_SUCCESS,
      book: book
    };
  },
  createBookFailure: message => {
    return {
      type: Constants.ACTIONS.CREATE_BOOK_FAILURE,
      message: message
    };
  },
  getBooksSuccess: bookList => {
    return {
      type: Constants.ACTIONS.GET_BOOKS_SUCCESS,
      bookList: bookList
    };
  },
  getBooksFailure: message => {
    return {
      type: Constants.ACTIONS.GET_BOOKS_FAILURE,
      message: message
    };
  },
  destroyBook: bookId => {
    return {
      type: Constants.ACTIONS.DESTROY_BOOK,
      bookId: bookId
    };
  }
};

export default BookActions;
