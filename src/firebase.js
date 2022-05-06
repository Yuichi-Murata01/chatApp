import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyALpBp9n9JChuynQQT8ops9vHZ92ZdsaJA",
  authDomain: "react-todo-app-48bcc.firebaseapp.com",
  projectId: "react-todo-app-48bcc",
  storageBucket: "react-todo-app-48bcc.appspot.com",
  messagingSenderId: "731112333069",
  appId: "1:731112333069:web:a49fdab6eab265c4f85a44"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };



// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: "AIzaSyALpBp9n9JChuynQQT8ops9vHZ92ZdsaJA",
//   authDomain: "react-todo-app-48bcc.firebaseapp.com",
//   projectId: "react-todo-app-48bcc",
//   storageBucket: "react-todo-app-48bcc.appspot.com",
//   messagingSenderId: "731112333069",
//   appId: "1:731112333069:web:a49fdab6eab265c4f85a44"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export const auth = getAuth(app);

// export default db;
