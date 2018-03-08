import React from "react";
import PropTypes from "prop-types";

const BookViewTitle = ({ title }) => {
  return (
    <div className="book-view-title">
      <h2>{title}</h2>
      <span role="img" aria-label="edit-icon">
        &#128393;
      </span>
    </div>
  );
};

BookViewTitle.propTypes = {
  title: PropTypes.string
};

BookViewTitle.defaultProps = {
  title: ""
};

export default BookViewTitle;
