import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  User,
  UserCredential,
} from "firebase/auth"
import EventEmitter from "events"
import { MessageService } from "./message.service"
import { firebase } from "../lib/firebase"

const auth = getAuth(firebase.app)

const ON_SIGN_UP_SUCCESS = "onSignUpSuccess"
const ON_LOGIN_SUCCESS = "onLoginSuccess"
const ON_ERROR = "onError"

export class AuthService {
  #events = new EventEmitter()

  //TODO: can the messages be combined to just onSuccess ? they are mutual exclusive
  public onLoginSuccess(callback: () => void) {
    this.#events.once(ON_LOGIN_SUCCESS, callback)
  }
  public onSignUpSuccess(callback: (user: User) => void) {
    this.#events.once(ON_SIGN_UP_SUCCESS, callback)
  }
  public onError(callback: (error: any) => void) {
    this.#events.on(ON_ERROR, callback)
  }

  async signUp(email: string, password: string) {
    let result: UserCredential | null = null

    try {
      //NOTE: on successfull signup, the user is automatically signed in
      result = await createUserWithEmailAndPassword(auth, email, password)

      this.#events.emit(ON_SIGN_UP_SUCCESS, result.user)
    } catch (e) {
      this.#events.emit(ON_ERROR, e)
    }

    return result
  }

  async signIn(email: string, password: string) {
    let result: UserCredential | null = null
    try {
      result = await signInWithEmailAndPassword(firebase.auth, email, password)
      this.#events.emit(ON_LOGIN_SUCCESS)
    } catch (e) {
      this.#events.emit(ON_ERROR, e)
    }

    //TODO: need to check if this is working correctly or if we need to pass in the sender every time
    if (result) MessageService.setSender(result.user)

    return result
  }
}
