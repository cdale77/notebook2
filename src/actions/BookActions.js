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
  destroyBook: () => {
    return {
      type: Constants.ACTIONS.DESTROY_BOOK
    };
  }
};

export default BookActions;
