import NoteActions from "../../actions/NoteActions";
const note1 = {
  bookId: "book1",
  noteId: "1324",
  text: "Test"
};

describe("NoteActions", () => {
  it("should return the proper UPDATE_NOTE_SUCCESS action", () => {
    const result = NoteActions.updateNoteSuccess(note1);
    expect(result).toEqual({
      type: "UPDATE_NOTE_SUCCESS",
      note: note1
    });
  });

  it("should return the proper UPDATE_NOTE_FAILURE action", () => {
    const result = NoteActions.updateNoteFailure("something went wrong");
    expect(result).toEqual({
      type: "UPDATE_NOTE_FAILURE",
      message: "something went wrong"
    });
  });

  it("should return the proper CREATE_NOTE_SUCCESS action", () => {
    const result = NoteActions.createNoteSuccess(note1);
    expect(result).toEqual({
      type: "CREATE_NOTE_SUCCESS",
      note: note1
    });
  });

  it("should return the proper CREATE_NOTE_FAILURE action", () => {
    const result = NoteActions.createNoteFailure("something went wrong");
    expect(result).toEqual({
      type: "CREATE_NOTE_FAILURE",
      message: "something went wrong"
    });
  });

  it("should return the proper GET_NOTES_SUCCESS action", () => {
    const note2 = {
      bookId: "book1",
      noteId: "abcd",
      text: "Foo"
    };

    const noteList = [note1, note2];

    const result = NoteActions.getNotesSuccess(noteList);
    expect(result).toEqual({
      type: "GET_NOTES_SUCCESS",
      noteList: noteList
    });
  });

  it("should return the proper GET_NOTES_FAILURE action", () => {
    const result = NoteActions.getNotesFailure("something went wrong");
    expect(result).toEqual({
      type: "GET_NOTES_FAILURE",
      message: "something went wrong"
    });
  });

  it("should return the proper SET_CURRENT_NOTE action", () => {
    const result = NoteActions.setCurrentNote(note1);
    expect(result).toEqual({
      type: "SET_CURRENT_NOTE",
      note: note1
    });
  });

  it("should return the proper CLEAR_CURRENT_NOTE action", () => {
    const result = NoteActions.clearCurrentNote();
    expect(result).toEqual({
      type: "CLEAR_CURRENT_NOTE"
    });
  });

  it("should return the proper DESTROY_NOTE action", () => {
    const result = NoteActions.destroyNote("abcd");
    expect(result).toEqual({
      type: "DESTROY_NOTE",
      noteId: "abcd"
    });
  });
});
