import React from "react";
import PropTypes from "prop-types";
import NewNoteForm from "./forms/NewNoteForm";

const NoteList = ({ notes }) => {
  return (
    <div className="note-list">
      <NewNoteForm onSubmit={() => {}} />
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.array
};

NoteList.defaultProps = {
  notes: []
};

export default NoteList;
