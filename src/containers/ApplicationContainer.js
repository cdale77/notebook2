import React from "react";
import { connect } from "react-redux";
import FlashActions from "./../actions/FlashActions";
import SessionActions from "./../actions/SessionActions";
import SignInContainer from "./SignInContainer";
import AuthenticatedContainer from "./AuthenticatedContainer";
import Flash from "../components/Flash";

const mapStateToProps = state => {
  return {
    session: state.session,
    flashType: state.flash.flashType,
    flashMsg: state.flash.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeFlash: e => {
      dispatch(FlashActions.flashClear());
    },
    signOut: e => {
      dispatch(SessionActions.destroySession());
    }
  };
};

class AppContainer extends React.Component {
  renderContainer() {
    if (this.props.session.signedIn === true) {
      return <AuthenticatedContainer />;
    } else {
      return <SignInContainer />;
    }
  }

  render() {
    return (
      <div id="app">
        <Flash
          closeFlash={this.props.closeFlash}
          flashType={this.props.flashType}
          message={this.props.flashMsg}
        />
        {this.renderContainer()}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
