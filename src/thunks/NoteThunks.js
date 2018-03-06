import RequestActions from "../actions/RequestActions";
import NoteActions from "../actions/NoteActions";
import FlashActions from "../actions/FlashActions";
import Utils from "../Utils";

const NoteThunks = {
  updateNote: note => {
    return dispatch => {
      dispatch(RequestActions.requestStart("UPDATE_NOTE"));
      const fireBaseRef = Utils.getFireBaseNoteRef(note.bookId, note.noteId);

      fireBaseRef
        .update(note)
        .then(() => {
          dispatch(NoteActions.updateNoteSuccess(note));
        })
        .catch(error => {
          dispatch(FlashActions.flashError(error.message));
          dispatch(NoteActions.updateNoteFailure(error.message));
        });
      dispatch(RequestActions.requestEnd("UPDATE_NOTE"));
    };
  },
  createNote: (bookId, name) => {
    return dispatch => {
      dispatch(RequestActions.requestStart("CREATE_NOTE"));
      const noteId = new Date().getTime();
      const fireBaseRef = Utils.getFireBaseNoteRef(bookId, noteId);
      const newNote = {
        noteId: noteId,
        bookId: bookId,
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
  getNotes: bookId => {
    return dispatch => {
      dispatch(RequestActions.requestStart("GET_NOTES"));
      const fireBaseRef = Utils.getFireBaseNotesRef(bookId);
      fireBaseRef
        .once("value")
        .then(resp => {
          // Destructure the firebase data - make an array of note objects
          const fbData = resp.val();
          if (fbData === null) {
            throw new Error("No notes found.");
          }
          const noteList = Object.entries(fbData).map(array => {
            // the first item in the array is the bookId/key, the
            // second is the actual book object
            return array[1];
          });

          dispatch(NoteActions.getNotesSuccess(noteList));
        })
        .catch(error => {
          dispatch(FlashActions.flashError(error.message));
          dispatch(NoteActions.getNotesFailure(error.message));
        });
      dispatch(RequestActions.requestEnd("GET_NOTES"));
    };
  }
};

export default NoteThunks;
