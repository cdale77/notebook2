import React from "react";
import PropTypes from "prop-types";

const BookListing = ({ book, setCurrentBook }) => {
  return (
    <div onClick={setCurrentBook} className="book-listing">
      <div className="book-name">{book.name}</div>
    </div>
  );
};

BookListing.propTypes = {
  book: PropTypes.object,
  setCurrentBook: PropTypes.func.isRequired
};

BookListing.defaultProps = {
  book: {}
};

export default BookListing;
