import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { firebase } from "../firebase"

const auth = getAuth(firebase.app)

export default async function signUp(email: string, password: string, playerName: string) {
  let result = null,
    error = null
  try {
    result = await createUserWithEmailAndPassword(auth, email, password)

    updateProfile(result.user, { displayName: playerName })

    await setDoc(doc(firebase.firestore, "users", result.user.uid), {
      uid: result.user.uid,
      email,
      firstname: "", //TODO: add firstname to signup form
      lastname: "", //TODO: add lastname to signup form
    })
    // create a user-games document for the user, which basically stors the games the user has joined and played in
    // good tutorial: https://www.youtube.com/watch?v=k4mjF4sPITE
    await setDoc(doc(firebase.firestore, "user-games", result.user.uid), {})
  } catch (e) {
    error = e
  }

  return { result, error }
}
