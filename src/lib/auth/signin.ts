import { signInWithEmailAndPassword } from "firebase/auth"
import { firebase } from "../firebase"

export default async function signIn(email: string, password: string) {
  let result = null,
    error = null
  try {
    result = await signInWithEmailAndPassword(firebase.auth, email, password)
  } catch (e) {
    error = e
  }

  return { result, error }
}
