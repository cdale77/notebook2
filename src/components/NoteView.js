import React from "react";
import PropTypes from "prop-types";

const NoteView = ({ note }) => {
  return <div className="note-view">NoteView</div>;
};

NoteView.propTypes = {
  note: PropTypes.object
};

NoteView.defaultProps = {
  note: {}
};

export default NoteView;
