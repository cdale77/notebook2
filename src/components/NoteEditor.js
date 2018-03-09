import React from "react";
import PropTypes from "prop-types";
import Utils from "../Utils";

class NoteEditor extends React.Component {
  constructor(props) {
    super(props);
    this.debouncedSave = Utils.debounce(() => {
      const note = this.state.note;
      props.updateNote(note);
      this.showSaveIcon();
    }, 3000);

    this.state = {
      note: props.note,
      displaySaveIcon: false
    };
  }

  componentWillReceiveProps(newProps) {
    const newNote = newProps.note;
    // textarea seems to not update itself if provided null for the value
    if (Object.keys(newNote).length === 0) {
      this.setState({ note: { text: "" } });
    } else {
      this.setState({ note: newNote });
    }
  }

  showSaveIcon() {
    const iconTimer = window.setTimeout(() => {
      window.clearTimeout(this.state.iconTimer);
      this.setState({ displaySaveIcon: false, iconTimer: null });
    }, 3000);
    this.setState({ displaySaveIcon: true, iconTimer: iconTimer });
  }

  saveIconClass() {
    if (this.state.displaySaveIcon === false) return "hidden";
  }

  handleFormChange(e) {
    const oldNote = this.state.note;
    const newNote = {
      noteId: oldNote.noteId,
      bookId: oldNote.bookId,
      name: oldNote.name,
      text: e.target.value
    };
    this.setState({ note: newNote });
    this.debouncedSave();
  }

  render() {
    return (
      <div className="note-editor">
        <div className="editor-tools">
          <div className={"save-icon " + this.saveIconClass()}>
            <span role="img" aria-label="save-icon">
              &#128190;
            </span>
          </div>
        </div>
        <form>
          <textarea
            className="note-text"
            name="note-text"
            id="note-text"
            value={this.state.note.text}
            onChange={this.handleFormChange.bind(this)}
          />
        </form>
      </div>
    );
  }
}

NoteEditor.propTypes = {
  note: PropTypes.object,
  updateNote: PropTypes.func
};

NoteEditor.defaultProps = {
  note: { text: "" }
};

export default NoteEditor;
