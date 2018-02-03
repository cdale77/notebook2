import React from "react";
import { connect } from "react-redux";
import Nav from "../components/Nav";
import SessionThunks from "../thunks/SessionThunks";

const mapStateToProps = state => {
  return {
    session: state.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => {
      dispatch(SessionThunks.signOut());
    }
  };
};

class AuthenticatedContainer extends React.Component {
  render() {
    const signedIn = this.props.session["signedIn"];
    return (
      <div className="authenticated-container">
        <Nav signedIn={signedIn} signOut={this.props.signOut} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  AuthenticatedContainer
);
