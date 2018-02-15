import React from "react";
import PropTypes from "prop-types";
import NewBookForm from "./forms/NewBookForm";

const BookList = ({ bookList, createBook }) => {
  return (
    <div className="book-list">
      <h2>NoteBooks</h2>
      <NewBookForm onSubmit={createBook} />
    </div>
  );
};

BookList.propTypes = {
  bookList: PropTypes.array,
  createBook: PropTypes.func.isRequired
};

BookList.defaultProps = {
  bookList: []
};

export default BookList;
