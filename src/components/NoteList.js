import React from "react";
import PropTypes from "prop-types";
import NewNoteForm from "./forms/NewNoteForm";
import NoteListing from "./NoteListing";

const NoteList = ({ notes, createNote }) => {
  const buildNoteListing = noteList => {
    return noteList.map(note => {
      return (
        <NoteListing key={note.noteId} note={note} setCurrentNote={() => {}} />
      );
    });
  };

  return (
    <div className="note-list">
      <NewNoteForm onSubmit={createNote} />
      {buildNoteListing(notes)}
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
