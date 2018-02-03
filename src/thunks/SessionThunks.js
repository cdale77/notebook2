import RequestActions from "../actions/RequestActions";
import SessionActions from "../actions/SessionActions";
import FlashActions from "../actions/FlashActions";
import Firebase from "../Firebase";

const SessionThunks = {
  signIn: (email, password) => {
    return dispatch => {
      dispatch(RequestActions.requestStart("NEW_SESSION"));
      Firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(_ => {
          const user = Firebase.auth().currentUser;
          dispatch(SessionActions.newSessionSuccess(user.uid));
        })
        .catch(error => {
          dispatch(FlashActions.flashError(error.message));
          dispatch(SessionActions.newSessionFailure(error.message));
        });

      dispatch(RequestActions.requestEnd("NEW_SESSION"));
    };
  },
  signOut: () => {
    return dispatch => {
      dispatch(RequestActions.requestStart("DESTROY_SESSION"));
      Firebase.auth()
        .signOut()
        .then(_ => {
          dispatch(SessionActions.destroySession());
        })
        .catch(error => {
          dispatch(FlashActions.flashError(error.message));
        });

      dispatch(RequestActions.requestEnd("DESTROY_SESSION"));
    };
  }
};

export default SessionThunks;
