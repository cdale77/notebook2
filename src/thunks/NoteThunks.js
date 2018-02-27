import RequestActions from "../actions/RequestActions";
import NoteActions from "../actions/NoteActions";
import FlashActions from "../actions/FlashActions";
import Utils from "../Utils";

const NoteThunks = {
  createNote: (bookId, name) => {
    return dispatch => {
      dispatch(RequestActions.requestStart("CREATE_NOTE"));
      const noteId = new Date().getTime();
      const fireBaseRef = Utils.getFireBaseNoteRef(bookId, noteId);
      const newNote = {
        name: name,
        text: ""
      };

      fireBaseRef
        .set(newNote)
        .then(() => {
          dispatch(NoteActions.createNoteSuccess(newNote));
          dispatch(FlashActions.flashSuccess("Created new note"));
        })
        .catch(error => {
          dispatch(FlashActions.flashError(error.message));
          dispatch(NoteActions.createNoteFailure());
        });
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
