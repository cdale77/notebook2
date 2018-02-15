import React from "react";
import PropTypes from "prop-types";

const BookList = ({ bookList }) => {
  return (
    <div className="book-list">
      <h2>NoteBooks</h2>
    </div>
  );
};

BookList.propTypes = {
  bookList: PropTypes.array
};

BookList.defaultProps = {
  bookList: []
};

export default BookList;
