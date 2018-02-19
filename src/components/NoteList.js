import React from "react";
import PropTypes from "prop-types";

const NoteList = ({ notes }) => {
  return <div className="note-list">NoteList</div>;
};

NoteList.propTypes = {
  notes: PropTypes.array
};

NoteList.defaultProps = {
  notes: []
};

export default NoteList;
