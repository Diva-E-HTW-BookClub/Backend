import {getAuth, signInWithCustomToken } from "firebase/auth"
import { auth } from "./firebaseConfig";

const singInUser = async (token: any) => {
    
    console.log(token)
    signInWithCustomToken(auth, token).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("signed in")
        console.log(userCredential)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("not signed in")
        // ...
      });

}

export {singInUser}