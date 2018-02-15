import RequestActions from "../actions/RequestActions";
import BookActions from "../actions/BookActions";
import FlashActions from "../actions/FlashActions";
import Utils from "../Utils";

const BookThunks = {
  createBook: ({ name }) => {
    return dispatch => {
      dispatch(RequestActions.requestStart("CREATE_BOOK"));
      const bookId = new Date().getTime();
      const fireBaseRef = Utils.getFireBaseBookRef(bookId);
      const newBook = {
        name: name,
        bookId: bookId
      };

      fireBaseRef
        .set(newBook)
        .then(() => {
          dispatch(BookActions.createBookSuccess(newBook));
          dispatch(FlashActions.flashSuccess("Created new book"));
        })
        .catch(error => {
          dispatch(FlashActions.flashError(error.message));
          dispatch(BookActions.createBookFailure());
        });

      dispatch(RequestActions.requestEnd("CREATE_BOOK"));
    };
  }
};

export default BookThunks;
