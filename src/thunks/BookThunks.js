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
  },
  getBooks: () => {
    return dispatch => {
      dispatch(RequestActions.requestStart("GET_BOOKS"));
      const fireBaseRef = Utils.getFireBaseBooksRef();

      fireBaseRef
        .once("value")
        .then(resp => {
          // Destructure the firebase data - make an array of book objects
          const fbData = resp.val();
          const bookList = Object.entries(fbData).map(array => {
            // the first item in the array is the bookId/key, the
            // second is the actual book object
            return array[1];
          });

          dispatch(BookActions.getBooksSuccess(bookList));
        })
        .catch(error => {
          dispatch(FlashActions.flashError(error.message));
          dispatch(BookActions.getBooksFailure(error.message));
        });

      dispatch(RequestActions.requestEnd("GET_BOOKS"));
    };
  }
};

export default BookThunks;
