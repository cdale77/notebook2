import Constants from "../../Constants";
import NoteReducer from "../../reducers/NoteReducer";
import NoteActions from "../../actions/NoteActions";

const existingNote = {
  noteId: "abcd",
  name: "Bar"
};

const noteList = [existingNote];

const state = {
  currentNote: {},
  noteList: noteList
};

describe("NoteReducer", () => {
  it("should return the default state with no match", () => {
    const returnedState = NoteReducer(undefined, {});
    expect(returnedState).toEqual({});
  });

  it("should handle UPDATE_NOTE_SUCCESS", () => {
    const updatedNote = {
      noteId: "abcd",
      name: "Foo"
    };

    const existingState = {
      currentNote: existingNote,
      noteList: noteList
    };

    const returnedState = NoteReducer(
      existingState,
      NoteActions.updateNoteSuccess(updatedNote)
    );

    expect(returnedState).toEqual({
      currentNote: updatedNote,
      noteList: noteList
    });
  });

  it("should handle CREATE_NOTE_SUCCESS", () => {
    const newNote = {
      noteId: "1234",
      name: "Foo"
    };

    const newList = [newNote, existingNote];

    const returnedState = NoteReducer(
      state,
      NoteActions.createNoteSuccess(newNote)
    );

    expect(returnedState).toEqual({
      currentNote: {},
      noteList: newList
    });
  });

  it("should handle GET_NOTES_SUCCESS", () => {
    const newNote = {
      noteId: "1234",
      name: "Foo"
    };

    const noteList = [newNote, existingNote];

    const returnedState = NoteReducer(
      state,
      NoteActions.getNotesSuccess(noteList)
    );

    expect(returnedState).toEqual({
      currentNote: {},
      noteList: noteList
    });
  });

  it("should handle GET_NOTES_FAILURE", () => {
    const returnedState = NoteReducer(
      state,
      NoteActions.getNotesFailure("Something went wrong.")
    );

    expect(returnedState).toEqual({
      currentNote: {},
      noteList: []
    });
  });

  it("should handle CREATE_NOTE_FAILURE", () => {
    const returnedState = NoteReducer(state, NoteActions.createNoteFailure());
    expect(returnedState).toEqual({
      currentNote: {},
      noteList: noteList
    });
  });

  it("should handle SET_CURRENT_NOTE", () => {
    const returnedState = NoteReducer(
      state,
      NoteActions.setCurrentNote(existingNote)
    );

    expect(returnedState).toEqual({
      currentNote: existingNote,
      noteList: noteList
    });
  });

  it("should handle CLEAR_CURRENT_NOTE", () => {
    state["currentNote"] = existingNote;
    const returnedState = NoteReducer(state, NoteActions.clearCurrentNote());

    expect(returnedState).toEqual({
      currentNote: {},
      noteList: noteList
    });
  });

  it("should handle DESTROY_NOTE", () => {
    const returnedState = NoteReducer(
      state,
      NoteActions.destroyNote(existingNote.noteId)
    );
    expect(returnedState).toEqual({
      currentNote: {},
      noteList: []
    });
  });
});
