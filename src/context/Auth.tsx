import { onAuthStateChanged, User } from "firebase/auth"
import React, { createContext, FC, useContext, useEffect, useState } from "react"
import { firebase } from "@/lib/firebase"

type AuthContextType = Record<string, any>

const AuthContext = createContext({} as AuthContextType)

export const useAuthContext = () => useContext(AuthContext)

const AuthContextProvider: FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  //TODO: rename to is loading
  const [loading, setLoading] = useState(true)

  //TODO: add error handling

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebase.auth, (user) => {
      //TODO: can be simplified to just setUser(user)
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  //TODO: probably loading should be passed in as value and then each component can decide how to render the loading as it might be different depending on the component
  return <AuthContext.Provider value={{ user }}> {loading ? <div>Loading...</div> : children}</AuthContext.Provider>
}

export { AuthContext, AuthContextProvider }

//TODO: move to types?!
export type { AuthContextType }
