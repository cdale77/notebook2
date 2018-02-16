import Constants from "../Constants";

const SessionActions = {
  createSessionSuccess: uid => {
    return {
      type: Constants.ACTIONS.CREATE_SESSION_SUCCESS,
      uid: uid
    };
  },
  createSessionFailure: message => {
    return {
      type: Constants.ACTIONS.CREATE_SESSION_FAILURE,
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
