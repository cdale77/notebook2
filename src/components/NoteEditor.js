import React from "react";
import PropTypes from "prop-types";
import Utils from "../Utils";

class NoteEditor extends React.Component {
  constructor(props) {
    super(props);
    this.debouncedSave = Utils.debounce(() => {
      const noteText = this.state.noteText;
      console.log("savingNote: ", noteText);
      this.showSaveIcon();
    }, 3000);

    this.state = {
      noteText: props.note.text,
      displaySaveIcon: false
    };
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
    const newText = e.target.value;
    this.setState({ noteText: newText });
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
            name="note-text"
            id="note-text"
            value={this.state.noteText}
            onChange={this.handleFormChange.bind(this)}
          />
        </form>
      </div>
    );
  }
}

NoteEditor.propTypes = {
  note: PropTypes.object
};

NoteEditor.defaultProps = {
  note: {}
};

export default NoteEditor;
