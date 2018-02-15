import React from "react";
import PropTypes from "prop-types";

const BookView = ({ book }) => {
  return (
    <div className="book-view">
      <h2>NoteBook View</h2>
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
