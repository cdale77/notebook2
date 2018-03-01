import React from "react";
import PropTypes from "prop-types";
import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";
import NoteView from "./NoteView";

const BookView = ({
  book,
  noteList,
  currentNote,
  createNote,
  setCurrentNote
}) => {
  return (
    <div className="book-view">
      <NoteList
        notes={noteList}
        createNote={createNote}
        setCurrentNote={setCurrentNote}
      />
      <NoteEditor note={currentNote} />
      <NoteView note={currentNote} />
    </div>
  );
};

BookView.propTypes = {
  book: PropTypes.object,
  currentNote: PropTypes.object,
  noteList: PropTypes.array,
  createNote: PropTypes.func.isRequired,
  setCurrentNote: PropTypes.func.isRequired
};

BookView.defaultProps = {
  book: {},
  currentNote: {},
  noteList: []
};

export default BookView;
