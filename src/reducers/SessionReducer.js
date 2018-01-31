import Constants from "../Constants";

function sessionReducer(state = {}, action) {
  switch (action.type) {
    case Constants.ACTIONS.NEW_SESSION_SUCCESS:
      return Object.assign({}, state, {
        signedIn: true
      });

    case Constants.ACTIONS.NEW_SESSION_FAILURE:
      return Object.assign({}, state, {
        signedIn: false
      });

    case Constants.ACTIONS.DESTROY_SESSION:
      return Object.assign({}, state, {
        signedIn: false
      });

    default:
      return state;
  }
}

export default sessionReducer;
