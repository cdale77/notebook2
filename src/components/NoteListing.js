import React from "react";
import PropTypes from "prop-types";

const NoteListing = ({ note, setCurrentNote }) => {
  return (
    <div onClick={setCurrentNote} className="note-listing">
      <div className="note-name">{note.name}</div>
    </div>
  );
};

NoteListing.propTypes = {
  note: PropTypes.object,
  setCurrentNote: PropTypes.func.isRequired
};

NoteListing.defaultProps = {
  note: {}
};

export default NoteListing;
