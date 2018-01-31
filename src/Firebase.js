import * as Firebase from "firebase";

const config = {
  apiKey: "AIzaSyBx95_PJ7baPHeuT54lrIIpC1iK2AAUcEQ",
  authDomain: "notebook2-ee715.firebaseapp.com",
  databaseURL: "https://notebook2-ee715.firebaseio.com",
  projectId: "notebook2-ee715",
  storageBucket: "notebook2-ee715.appspot.com",
  messagingSenderId: "880734299130"
};

Firebase.initializeApp(config);

export default Firebase;
