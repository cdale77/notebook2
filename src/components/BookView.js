import React from "react";
import PropTypes from "prop-types";
import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";
import NoteView from "./NoteView";

const BookView = ({ book, noteList, currentNote, createNote }) => {
  return (
    <div className="book-view">
      <NoteList notes={noteList} createNote={createNote} />
      <NoteEditor note={{}} />
      <NoteView note={{}} />
    </div>
  );
};

BookView.propTypes = {
  book: PropTypes.object,
  currentNote: PropTypes.object,
  noteList: PropTypes.array,
  createNote: PropTypes.func.isRequired
};

BookView.defaultProps = {
  book: {},
  currentNote: {},
  noteList: []
};

export default BookView;
