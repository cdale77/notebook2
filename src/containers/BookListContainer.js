import React from "react";
import { connect } from "react-redux";
import NewBookForm from "../components/forms/NewBookForm";
import BookListing from "../components/BookListing";
import BookThunks from "../thunks/BookThunks";
import BookActions from "../actions/BookActions";

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBook: name => {
      dispatch(BookThunks.createBook(name));
    },
    getBooks: () => {
      dispatch(BookThunks.getBooks());
    },
    setCurrentBook: book => {
      dispatch(BookActions.setCurrentBook(book));
    }
  };
};

class BookListContainer extends React.Component {
  componentDidMount() {
    this.props.getBooks();
  }

  buildBookList() {
    const bookList = this.props.books["bookList"];
    return bookList.map(book => {
      return (
        <BookListing
          key={book["bookId"]}
          book={book}
          setCurrentBook={this.props.setCurrentBook.bind(this, book)}
        />
      );
    });
  }

  render() {
    return (
      <div className="book-list">
        <h2>NoteBooks</h2>
        <NewBookForm onSubmit={this.props.createBook} />
        <div className="book-cards">{this.buildBookList()}</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);
