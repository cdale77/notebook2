import React from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";
import SubmitButton from "./SubmitButton";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className="sign-in-form">
        <form>
          <TextInput
            title="email"
            name="email"
            value={this.state.email}
            onChange={this.handleEmailChange.bind(this)}
          />
          <TextInput
            title="password"
            name="password"
            fieldType="password"
            value={this.state.password}
            onChange={this.handlePasswordChange.bind(this)}
          />
          <SubmitButton onSubmit={this.onSubmit.bind(this)} />
        </form>
      </div>
    );
  }
}

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SignInForm;
