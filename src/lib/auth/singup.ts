import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { firebase } from "../firebase"

const auth = getAuth(firebase.app)
export default async function signUp(email: string, password: string) {
  let result = null,
    error = null
  try {
    console.log({ auth })
    result = await createUserWithEmailAndPassword(auth, email, password)
  } catch (e) {
    error = e
  }

  return { result, error }
}
