import React from "react";
import { connect } from "react-redux";
import Nav from "../components/Nav";
import SessionThunks from "../thunks/SessionThunks";
import BookThunks from "../thunks/BookThunks";
import BookActions from "../actions/BookActions";
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
    createBook: name => {
      dispatch(BookThunks.createBook(name));
    },
    getBooks: () => {
      dispatch(BookThunks.getBooks());
    },
    setCurrentBook: book => {
      dispatch(BookActions.setCurrentBook(book));
    },
    clearCurrentBook: () => {
      dispatch(BookActions.clearCurrentBook());
    }
  };
};

class AuthenticatedContainer extends React.Component {
  componentDidMount() {
    this.props.getBooks();
  }

  getCurrentBook() {
    return this.props.books["currentBook"] || {};
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
        <BookList
          bookList={bookList}
          createBook={this.props.createBook}
          setCurrentBook={this.props.setCurrentBook}
        />
      );
    }
  }

  render() {
    const signedIn = this.props.session["signedIn"];
    return (
      <div className="authenticated-container">
        <Nav
          signedIn={signedIn}
          signOut={this.props.signOut}
          clearCurrentBook={this.props.clearCurrentBook}
        />
        {this.elementToDisplay()}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  AuthenticatedContainer
);
