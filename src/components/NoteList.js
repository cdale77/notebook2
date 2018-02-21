import React from "react";
import PropTypes from "prop-types";
import NewNoteForm from "./forms/NewNoteForm";

const NoteList = ({ notes, createNote }) => {
  return (
    <div className="note-list">
      <NewNoteForm onSubmit={createNote} />
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.array,
  createNote: PropTypes.func.isRequired
};

NoteList.defaultProps = {
  notes: []
};

export default NoteList;
