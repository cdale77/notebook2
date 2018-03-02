import Constants from "../Constants";

const NoteActions = {
  updateNoteSuccess: note => {
    return {
      type: Constants.ACTIONS.UPDATE_NOTE_SUCCESS,
      note: note
    };
  },
  updateNoteFailure: message => {
    return {
      type: Constants.ACTIONS.UPDATE_NOTE_FAILURE,
      message: message
    };
  },
  createNoteSuccess: note => {
    return {
      type: Constants.ACTIONS.CREATE_NOTE_SUCCESS,
      note: note
    };
  },
  createNoteFailure: message => {
    return {
      type: Constants.ACTIONS.CREATE_NOTE_FAILURE,
      message: message
    };
  },
  getNotesSuccess: noteList => {
    return {
      type: Constants.ACTIONS.GET_NOTES_SUCCESS,
      noteList: noteList
    };
  },
  getNotesFailure: message => {
    return {
      type: Constants.ACTIONS.GET_NOTES_FAILURE,
      message: message
    };
  },
  setCurrentNote: note => {
    return {
      type: Constants.ACTIONS.SET_CURRENT_NOTE,
      note: note
    };
  },
  clearCurrentNote: () => {
    return {
      type: Constants.ACTIONS.CLEAR_CURRENT_NOTE
    };
  },
  destroyNote: noteId => {
    return {
      type: Constants.ACTIONS.DESTROY_NOTE,
      noteId: noteId
    };
  }
};

export default NoteActions;
