import React from "react";
import PropTypes from "prop-types";
import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";

const BookView = ({ book }) => {
  return (
    <div className="book-view">
      BookView
      <NoteList notes={[]} />
      <NoteEditor note={{}} />
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
