import React from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";
import SubmitButton from "./SubmitButton";

class NewNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", expanded: false };
  }

  toggleExpander() {
    this.setState({ expanded: !this.state.expanded });
  }

  expanderClassName() {
    const base = "expander-trigger new-note-form-expander";
    if (this.state.expanded === true) return base;
    else return base + " expander-hidden";
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const form = { name: this.state.name };
    this.props.onSubmit(form);
    this.setState({ expanded: false });
  }

  render() {
    return (
      <div className="expander">
        <button
          onClick={this.toggleExpander.bind(this)}
          className={"new-note-expander " + this.expanderClassName()}
        >
          + Add Note
        </button>
        <div className="new-note-form expander-content">
          <form>
            <div className="fieldset-wrapper">
              <TextInput
                name="name"
                title="Name"
                value={this.state.name}
                onChange={this.handleNameChange.bind(this)}
              />
              <SubmitButton onSubmit={this.onSubmit.bind(this)} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

NewNoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default NewNoteForm;
