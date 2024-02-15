import { User } from "firebase/auth"
import { updateProfile as firebase_updateProfile } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { firebase } from "@/lib/firebase"

export class UserService {
  async createProfile(user: User, displayName: string) {
    const updateProfilePromise = this.updateProfile(user, displayName)
    const setDocUserPromise = setDoc(doc(firebase.firestore, "users", user.uid), {
      uid: user.uid,
      email: user.email,
      firstname: "",
      lastname: "",
      profilePicture: "",
      createdAt: new Date().toISOString(),
      updatedAt: null,
    })
    // create a user-games document for the user, which basically stors the games the user has joined and played in
    // good tutorial: https://www.youtube.com/watch?v=k4mjF4sPITE
    const setDocUserGamesPromise = setDoc(doc(firebase.firestore, "user-games", user.uid), {})

    await Promise.all([updateProfilePromise, setDocUserPromise, setDocUserGamesPromise])
  }
  async updateProfile(user: User, displayName: string) {
    firebase_updateProfile(user, { displayName })
  }
}
