import React from "react";
import { connect } from "react-redux";
import Nav from "../components/Nav";
import SessionThunks from "../thunks/SessionThunks";
import BookList from "../components/BookList";
import BookView from "../components/BookView";

const mapStateToProps = state => {
  return {
    session: state.session,
    books: state.books
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => {
      dispatch(SessionThunks.signOut());
    },
    createBook: bookName => {
      console.log("creating new book: ", bookName);
    }
  };
};

class AuthenticatedContainer extends React.Component {
  getCurrentBook() {
    return this.props.books["currenBook"] || {};
  }

  getBookList() {
    return this.props.books["bookList"] || [];
  }

  elementToDisplay() {
    const currentBook = this.getCurrentBook();
    const bookList = this.getBookList();
    if (currentBook["bookId"]) {
      return <BookView book={currentBook} />;
    } else {
      return (
        <BookList bookList={bookList} createBook={this.props.createBook} />
      );
    }
  }

  render() {
    const signedIn = this.props.session["signedIn"];
    return (
      <div className="authenticated-container">
        <Nav signedIn={signedIn} signOut={this.props.signOut} />
        {this.elementToDisplay()}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  AuthenticatedContainer
);
