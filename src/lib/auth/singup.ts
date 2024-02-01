import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { firebase } from "../firebase"

const auth = getAuth(firebase.app)

export default async function signUp(email: string, password: string) {
  let result = null,
    error = null
  try {
    console.log({ auth })
    result = await createUserWithEmailAndPassword(auth, email, password)
    await setDoc(doc(firebase.firestore, "users", result.user.uid), {
      uid: result.user.uid,
      email,
      firstname: "", //TODO: add firstname to signup form
      lastname: "", //TODO: add lastname to signup form
    })
  } catch (e) {
    error = e
  }

  return { result, error }
}
