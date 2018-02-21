import React from "react";
import PropTypes from "prop-types";
import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";
import NoteView from "./NoteView";

const BookView = ({ book, createNote }) => {
  return (
    <div className="book-view">
      <NoteList notes={[]} createNote={createNote} />
      <NoteEditor note={{}} />
      <NoteView note={{}} />
    </div>
  );
};

BookView.propTypes = {
  book: PropTypes.object,
  createNote: PropTypes.func.isRequired
};

BookView.defaultProps = {
  book: {}
};

export default BookView;
