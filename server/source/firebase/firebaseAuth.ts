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

function checkAuth(req: any) {
  return req.headers.FRONTEND_AUTH_KEY == process.env.FRONTED_AUTH_KEY
}

export {singInUser, checkAuth}