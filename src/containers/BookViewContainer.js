import React from "react";
import { connect } from "react-redux";
import BookView from "../components/BookView";
import BookViewTitle from "../components/BookViewTitle";
import NoteThunks from "../thunks/NoteThunks";
import NoteActions from "../actions/NoteActions";

const mapStateToProps = state => {
  return {
    books: state.books,
    notes: state.notes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createNote: (bookId, form) => {
      dispatch(NoteThunks.createNote(bookId, form.name));
    },
    getNotes: bookId => {
      dispatch(NoteThunks.getNotes(bookId));
    },
    setCurrentNote: noteId => {
      dispatch(NoteActions.setCurrentNote(noteId));
    },
    updateNote: note => {
      dispatch(NoteThunks.updateNote(note));
    }
  };
};

class BookViewContainer extends React.Component {
  componentDidMount() {
    const book = this.props.books["currentBook"] || {};
    this.props.getNotes(book["bookId"]);
  }

  render() {
    const currentBook = this.props.books["currentBook"];
    const noteList = this.props.notes["noteList"];
    const currentNote = this.props.notes["currentNote"];
    return (
      <div className="book-view-container">
        <BookViewTitle title={currentBook["name"]} />
        <BookView
          book={currentBook}
          noteList={noteList}
          currentNote={currentNote}
          setCurrentNote={this.props.setCurrentNote}
          updateNote={this.props.updateNote}
          createNote={this.props.createNote.bind(this, currentBook["bookId"])}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookViewContainer);
