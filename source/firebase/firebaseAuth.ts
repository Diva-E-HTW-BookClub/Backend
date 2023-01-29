import {getAuth, signInWithCustomToken } from "firebase/auth"
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, firebaseDB } from "./firebaseConfig";

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

async function saveUser(userId: string, username: string) {
  return setDoc(doc(firebaseDB, "users", userId), {
    username: username
  });
}

async function updateUser(userId: string, username: string) {
  console.log("updating")
  return updateDoc(doc(firebaseDB, "users", userId), {
    username: username
  });
}

async function getUsername(userId: string) {
  let document = await getDoc(doc(firebaseDB, "users", userId));
  return document.data()?.username;
}

export {singInUser, checkAuth, getUsername, saveUser, updateUser}