import React from "react";
import PropTypes from "prop-types";
import Showdown from "showdown";

class NoteView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { converter: new Showdown.Converter() };
  }

  createMarkup() {
    return { __html: this.state.converter.makeHtml(this.props.note.text) };
  }

  render() {
    return (
      <div className="note-view" dangerouslySetInnerHTML={this.createMarkup()}>
      </div>
    );
  }
}

NoteView.propTypes = {
  note: PropTypes.object
};

NoteView.defaultProps = {
  note: {}
};

export default NoteView;
