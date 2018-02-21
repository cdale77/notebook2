import React from "react";
import { connect } from "react-redux";
import BookView from "../components/BookView";

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createNote: (bookId, form) => {
      console.log("createNote");
      console.log("bookId: ", bookId);
      console.log("noteName: ", form.name);
    }
  };
};

class BookViewContainer extends React.Component {
  render() {
    const currentBook = this.props.books["currentBook"];
    return (
      <div className="book-view-container">
        <h2>{currentBook["name"]}</h2>
        <BookView
          book={currentBook}
          createNote={this.props.createNote.bind(this, currentBook["bookId"])}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookViewContainer);
