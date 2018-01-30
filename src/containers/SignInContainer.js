import React from "react";
import { connect } from "react-redux";
//import SignInForm from "./../components/forms/SignInForm";
//import SessionThunks from "./../thunks/SessionThunks";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: form => {
      console.log("sign in");
      //     dispatch(SessionThunks.signIn(form.email, form.password));
    }
  };
};

class SignInContainer extends React.Component {
  render() {
    return (
      <div className="sign-in-container">
        <h2>Sign In</h2>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
