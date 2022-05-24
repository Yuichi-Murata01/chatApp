import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: **********************,
  authDomain: **********************,
  projectId: **********************,
  storageBucket: **********************,
  messagingSenderId: **********************,
  appId: **********************"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };



// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";


// const firebaseConfig = {
  apiKey: **********************,
  authDomain: **********************,
  projectId: **********************,
  storageBucket: **********************,
  messagingSenderId: **********************,
  appId: **********************"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export const auth = getAuth(app);

// export default db;
