import { initializeApp, FirebaseOptions } from '@firebase/app'
import { getAuth, onAuthStateChanged, User, signInWithRedirect, GoogleAuthProvider, getRedirectResult, signOut as fbSignOut } from '@firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'

const config: FirebaseOptions = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
}

const fb = initializeApp(config)

export const auth = getAuth(fb)

export const googleAuthProvider = new GoogleAuthProvider()
googleAuthProvider.setCustomParameters({
  hd: 'bigbikebash.org.uk'
})

const UserContext = createContext<User | null>(null)

type UserProviderProps = {
  children: React.ReactNode
}
export function UserProvider ({ children }: UserProviderProps): React.ReactElement {
  const [user, setUser] = useState<User | null>(null)
  useEffect(() => {
    onAuthStateChanged(auth, (usr) => {
      setUser(usr)
    })
  })

  return (
    <UserContext.Provider value={user}>
      { children }
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)

export const signIn = () => signInWithRedirect(auth, googleAuthProvider)
export const signOut = () => fbSignOut(auth)

getRedirectResult(auth) // TODO: Move this somewhere more useful and capture any errors?
