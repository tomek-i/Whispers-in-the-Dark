import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { firebase } from "../firebase"

const auth = getAuth(firebase.app)

export default async function signIn(email: string, password: string) {
  let result = null,
    error = null
  try {
    result = await signInWithEmailAndPassword(auth, email, password)
  } catch (e) {
    error = e
  }

  return { result, error }
}
