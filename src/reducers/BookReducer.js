import Constants from "../Constants";

function BookReducer(state = {}, action) {
  switch (action.type) {
    case Constants.ACTIONS.CREATE_BOOK_SUCCESS:
      let newList = state.bookList.slice();
      newList.unshift(action.book);

      return Object.assign({}, state, {
        bookList: newList
      });

    case Constants.ACTIONS.GET_BOOKS_SUCCESS:
      return Object.assign({}, state, {
        bookList: action.bookList
      });

    case Constants.ACTIONS.SET_CURRENT_BOOK:
      return Object.assign({}, state, {
        currentBook: action.book
      });

    case Constants.ACTIONS.CLEAR_CURRENT_BOOK:
      return Object.assign({}, state, {
        currentBook: {}
      });

    case Constants.ACTIONS.DESTROY_BOOK:
      let filteredList = state.bookList.filter(book => {
        return book.bookId !== action.bookId;
      });

      return Object.assign({}, state, {
        bookList: filteredList,
        currentBook: {}
      });

    default:
      return state;
  }
}

export default BookReducer;
