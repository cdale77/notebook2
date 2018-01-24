import Constants from "../Constants";

const SessionActions = {
  newSessionSuccess: data => {
    return {
      type: Constants.ACTIONS.NEW_SESSION_SUCCESS,
      accessToken: data
    };
  },
  newSessionFailure: message => {
    return {
      type: Constants.ACTIONS.NEW_SESSION_FAILURE,
      message: message
    };
  },
  destroySession: () => {
    return {
      type: Constants.ACTIONS.DESTROY_SESSION
    };
  }
};

export default SessionActions;
