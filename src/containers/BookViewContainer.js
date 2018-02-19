import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

class BookViewContainer extends React.Component {
  render() {
    const currentBook = this.props.books["currentBook"]
    return (
      <div className="book-view">
        <h2>{currentBook["name"]}</h2>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookViewContainer);
