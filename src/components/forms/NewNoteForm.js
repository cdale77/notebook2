import React from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";
import SubmitButton from "./SubmitButton";

class NewNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className="form fieldset new-note-form">
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
    );
  }
}

NewNoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default NewNoteForm;
