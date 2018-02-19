import React from "react";
import PropTypes from "prop-types";

const BookView = ({ book }) => {
  return <div className="book-view">BookView</div>;
};

BookView.propTypes = {
  book: PropTypes.object
};

BookView.defaultProps = {
  book: {}
};

export default BookView;
