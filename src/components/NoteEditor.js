import React from "react";
import PropTypes from "prop-types";

const NoteEditor = ({ note }) => {
  return <div className="note-editor">NoteEditor</div>;
};

NoteEditor.propTypes = {
  note: PropTypes.object
};

NoteEditor.defaultProps = {
  note: {}
};

export default NoteEditor;
