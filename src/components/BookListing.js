import React from "react";
import PropTypes from "prop-types";

const BookListing = ({ book }) => {
  return <div className="book-listing">BookListing</div>;
};

BookListing.propTypes = {
  book: PropTypes.object
};

BookListing.defaultProps = {
  book: {}
};

export default BookListing;