import { getAuth, onAuthStateChanged, User } from "firebase/auth"
import React, { createContext, FC, useContext, useEffect, useState } from "react"
import { firebase } from "@/lib/firebase"

const auth = getAuth(firebase.app)

type AuthContextType = Record<string, any>

const AuthContext = createContext({} as AuthContextType)

export const useAuthContext = () => useContext(AuthContext)

const AuthContextProvider: FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return <AuthContext.Provider value={{ user }}> {loading ? <div>Loading...</div> : children}</AuthContext.Provider>
}

export { AuthContext, AuthContextProvider }
export type { AuthContextType }
