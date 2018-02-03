import Constants from "../Constants";

const SessionActions = {
  newSessionSuccess: uid => {
    return {
      type: Constants.ACTIONS.NEW_SESSION_SUCCESS,
      uid: uid
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
