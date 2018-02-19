import React from "react";
import PropTypes from "prop-types";
import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";
import NoteView from "./NoteView";

const BookView = ({ book }) => {
  return (
    <div className="book-view">
      BookView
      <NoteList notes={[]} />
      <NoteEditor note={{}} />
      <NoteView note={{}} />
    </div>
  );
};

BookView.propTypes = {
  book: PropTypes.object
};

BookView.defaultProps = {
  book: {}
};

export default BookView;
