import React from "react";
import PropTypes from "prop-types";
import NoteList from "./NoteList";

const BookView = ({ book }) => {
  return (
    <div className="book-view">
      BookView
      <NoteList notes={[]} />
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
