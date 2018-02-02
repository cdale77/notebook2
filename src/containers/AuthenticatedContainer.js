import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    session: state.session
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

class AuthenticatedContainer extends React.Component {
  render() {
    return (
      <div className="authenticated-container">
        AuthenticatedContainer
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  AuthenticatedContainer
);
