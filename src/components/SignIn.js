import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";
import Button from "@mui/material/Button";

function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div>
      <Button onClick={signInWithGoogle}>Sign In With Google</Button>
    </div>
  );
}

export default SignIn;



// import { Button } from '@mui/material'
// import React from 'react'
// import { GoogleAuthProvider,signInWithRedirect } from "firebase/auth";
// import { auth } from '../firebase';


// function SignIn() {
//     function SignInWithGoogle() {
//         const provider = new GoogleAuthProvider();
//         signInWithRedirect(auth, provider);
//     }
//     return (
//         <div>
//             <Button onClick={SignInWithGoogle}>グーグルでログインする</Button>
//         </div>
//   )
// }

// export default SignIn
