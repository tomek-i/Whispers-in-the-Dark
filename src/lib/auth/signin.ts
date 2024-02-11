import { signInWithEmailAndPassword } from "firebase/auth"
import { firebase } from "../firebase"
import { MessageService } from "../message.service"

export default async function signIn(email: string, password: string) {
  let result = null,
    error = null
  try {
    result = await signInWithEmailAndPassword(firebase.auth, email, password)
  } catch (e) {
    error = e
  }

  //TODO: need to check if this is working correctly or if we need to pass in the sender every time
  if (result) MessageService.setSender(result.user)

  return { result, error }
}
