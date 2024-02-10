import { onAuthStateChanged, User } from "firebase/auth"
import React, { createContext, FC, useContext, useEffect, useState } from "react"
import { firebase } from "@/lib/firebase"
import { Player } from "@/lib/game/Player"

type AuthContextType = { user: User | null; player: Player | null } & Record<string, any>

const AuthContext = createContext({} as AuthContextType)

export const useAuthContext = () => useContext(AuthContext)

const AuthContextProvider: FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [player, setPlayer] = useState<Player | null>(null)
  //TODO: rename to is loading
  const [loading, setLoading] = useState(true)

  //TODO: add error handling

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebase.auth, (user) => {
      console.log("auth changed user", user)
      if (user) {
        setUser(user)
        setPlayer(new Player(user))
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  //TODO: probably loading should be passed in as value and then each component can decide how to render the loading as it might be different depending on the component
  return (
    <AuthContext.Provider value={{ user, player }}> {loading ? <div>Loading...</div> : children}</AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }

//TODO: move to types?!
export type { AuthContextType }
