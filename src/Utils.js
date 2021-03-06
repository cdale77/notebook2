import Store from "./Store";
import Firebase from "./Firebase";

const Utils = {
  debounce: (fn, delay = 500) => {
    let timerId;
    return function(...args) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        fn(...args);
        timerId = null;
      }, delay);
    };
  },
  getUid: () => {
    const currentState = Store.getState();
    const session = currentState["session"] || {};
    return session["uid"] || "";
  },
  getFirebaseUserRef: () => {
    const uid = Utils.getUid;
    return Firebase.database().ref(uid);
  },
  getFireBaseBooksRef: () => {
    const uid = Utils.getUid();
    return Firebase.database().ref(uid + "/books");
  },
  getFireBaseBookRef: bookId => {
    const uid = Utils.getUid();
    return Firebase.database().ref(uid + "/books/" + bookId);
  },
  getFireBaseNotesRef: bookId => {
    const uid = Utils.getUid();
    return Firebase.database().ref(uid + "/notes/" + bookId);
  },
  getFireBaseNoteRef: (bookId, noteId) => {
    const uid = Utils.getUid();
    return Firebase.database().ref(uid + "/notes/" + bookId + "/" + noteId);
  }
};

export default Utils;
