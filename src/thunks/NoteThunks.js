import RequestActions from "../actions/RequestActions";
import NoteActions from "../actions/NoteActions";
import FlashActions from "../actions/FlashActions";
import Utils from "../Utils";

const NoteThunks = {
  createNote: (bookId, name) => {
    return dispatch => {
      dispatch(RequestActions.requestStart("CREATE_NOTE"));

      dispatch(RequestActions.requestEnd("CREATE_NOTE"));
    };
  },
  getNotes: () => {
    return dispatch => {
      dispatch(RequestActions.requestStart("GET_NOTES"));
    };
  }
};

export default NoteThunks;
