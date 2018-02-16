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
  setCurrentBook: book => {
    return {
      type: Constants.ACTIONS.SET_CURRENT_BOOK,
      book: book
    };
  },
  clearCurrentBook: () => {
    return {
      type: Constants.ACTIONS.CLEAR_CURRENT_BOOK
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
