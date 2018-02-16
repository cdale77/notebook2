import React from "react";
import PropTypes from "prop-types";
import NewBookForm from "./forms/NewBookForm";
import BookListing from "./BookListing";

const BookList = ({ bookList, createBook }) => {
  const buildBookList = () => {
    return bookList.map(book => {
      return <BookListing key={book["bookId"]} book={book} />;
    });
  };

  return (
    <div className="book-list">
      <h2>NoteBooks</h2>
      <NewBookForm onSubmit={createBook} />
      <div className="book-cards">{buildBookList()}</div>
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
