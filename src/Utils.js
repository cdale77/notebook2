import Store from "./Store";
import Firebase from "./Firebase";

const Utils = {
  debounce: (func, wait = 500, immediate) => {
    let timeout;
    return function() {
      let context = this,
        args = arguments;
      let later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  },
  getUid: () => {
    const currentState = Store.getState();
    const session = currentState["session"] || {};
    return session["uid"] || "";
  },
  getFirebaseUserRef: () => {
    const uid = this.getUid;
    return Firebase.ref(uid);
  },
  getFireBaseBooksRef: () => {
    const uid = this.getUid();
    return Firebase.ref(uid + "/books");
  },
  getFireBaseBookRef: bookId => {
    const uid = this.getUid();
    return Firebase.ref(uid + "/books/" + bookId);
  }
};

export default Utils;
