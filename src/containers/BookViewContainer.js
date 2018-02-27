import React from "react";
import { connect } from "react-redux";
import BookView from "../components/BookView";
import NoteThunks from "../thunks/NoteThunks";

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
    }
  };
};

class BookViewContainer extends React.Component {
  render() {
    const currentBook = this.props.books["currentBook"];
    const noteList = this.props.notes["noteList"];
    const currentNote = this.props.notes["currentNote"];
    return (
      <div className="book-view-container">
        <h2>{currentBook["name"]}</h2>
        <BookView
          book={currentBook}
          noteList={noteList}
          currentNote={currentNote}
          createNote={this.props.createNote.bind(this, currentBook["bookId"])}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookViewContainer);
