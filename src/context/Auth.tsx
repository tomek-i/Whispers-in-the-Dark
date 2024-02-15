import { onAuthStateChanged, User } from "firebase/auth"
import React, { createContext, FC, useContext, useEffect, useState } from "react"
import { firebase } from "@/lib/firebase"

type AuthContextType = {
  user: User | null
  isLoading: boolean
} & Record<string, any>

const AuthContext = createContext({} as AuthContextType)

export const useAuthContext = () => useContext(AuthContext)

const AuthContextProvider: FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  console.log("AuthContextProvider", isLoading)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebase.auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
        //TODO: should we redirect the user to login?
      }
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return <AuthContext.Provider value={{ user, isLoading }}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthContextProvider }

//TODO: move to types?!
export type { AuthContextType }
