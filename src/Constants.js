const Constants = {
  DEFAULT_STATE: {
    session: {
      signedIn: false,
      uuid: ""
    },
    flash: {
      flashType: "",
      message: ""
    },
    books: {
      bookList: [],
      currentBook: {}
    }
  },
  ACTIONS: {
    REQUEST_START: "REQUEST_START",
    REQUEST_END: "REQUEST_END",
    FLASH_SUCCESS: "FLASH_SUCCESS",
    FLASH_ERROR: "FLASH_ERROR",
    FLASH_CLEAR: "FLASH_CLEAR",
    CREATE_SESSION_SUCCESS: "CREATE_SESSION_SUCCESS",
    CREATE_SESSION_FAILURE: "CREATE_SESSION_FAILURE",
    DESTROY_SESSION: "DESTROY_SESSION",
    GET_BOOKS_SUCCESS: "GET_BOOKS_SUCCESS",
    GET_BOOKS_FAILURE: "GET_BOOKS_FAILURE",
    CREATE_BOOK_SUCCESS: "CREATE_BOOK_SUCCESS",
    CREATE_BOOK_FAILURE: "CREATE_BOOK_FAILURE",
    DESTROY_BOOK: "DESTROY_BOOK"
  }
};

export default Constants;
