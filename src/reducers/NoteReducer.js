import Constants from "../Constants";

function NoteReducer(state = {}, action) {
  switch (action.type) {
    case Constants.ACTIONS.UPDATE_NOTE_SUCCESS:
      return Object.assign({}, state, {
        currentNote: action.note
      });

    case Constants.ACTIONS.CREATE_NOTE_SUCCESS:
      let newList = state.noteList.slice();
      newList.unshift(action.note);

      return Object.assign({}, state, {
        noteList: newList
      });

    case Constants.ACTIONS.GET_NOTES_SUCCESS:
      return Object.assign({}, state, {
        noteList: action.noteList
      });

    case Constants.ACTIONS.SET_CURRENT_NOTE:
      return Object.assign({}, state, {
        currentNote: action.note
      });

    case Constants.ACTIONS.CLEAR_CURRENT_NOTE:
      return Object.assign({}, state, {
        currentNote: {}
      });

    case Constants.ACTIONS.DESTROY_NOTE:
      let filteredList = state.noteList.filter(note => {
        return note.noteId !== action.noteId;
      });

      return Object.assign({}, state, {
        noteList: filteredList,
        currentNote: {}
      });

    default:
      return state;
  }
}

export default NoteReducer;
