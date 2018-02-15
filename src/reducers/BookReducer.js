import Constants from "../Constants";

function bookReducer(state = {}, action) {
  switch (action.type) {
    case Constants.ACTIONS.CREATE_BOOK_SUCCESS:
      let newList = state.bookList.slice();
      newList.unshift(action.book);

      return Object.assign({}, state, {
        bookList: newList
      });

    case Constants.ACTIONS.DESTROY_BOOK:
      let filteredList = state.bookList.filter(book => {
        return book.bookId != action.bookId;
      });

      return Object.assign({}, state, {
        bookList: filteredList
      });

    default:
      return state;
  }
}

export default bookReducer;
