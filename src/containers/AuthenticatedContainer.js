import React from "react";
import { connect } from "react-redux";
import Nav from "../components/Nav";
import SessionThunks from "../thunks/SessionThunks";
import BookActions from "../actions/BookActions";
import BookListContainer from "../containers/BookListContainer";
import BookViewContainer from "../containers/BookViewContainer";

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
    clearCurrentBook: () => {
      dispatch(BookActions.clearCurrentBook());
    }
  };
};

class AuthenticatedContainer extends React.Component {
  getCurrentBook() {
    return this.props.books["currentBook"] || {};
  }

  getBookList() {
    return this.props.books["bookList"] || [];
  }

  elementToDisplay() {
    const currentBook = this.getCurrentBook();
    if (currentBook["bookId"]) {
      return <BookViewContainer />;
    } else {
      return <BookListContainer />;
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
