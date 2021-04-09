import React, { useState, createContext } from 'react'
import { loginRequest } from "./authService"
import * as firebase from "firebase"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)

  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  const onLogin = (email, password) => {
    setIsLoading(true)
    loginRequest(email, password)
      .then(u => {
        setIsLoading(false)
        setUser(u)
      })
      .catch(e => {
        setIsLoading(false)
        setError(e.toString())
      })
  }

  const onRegister = (email, password, repeatedPassword) =>  {
    if (password !== repeatedPassword) {
      setError('Error: Password don`t match')
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(u => {
        setIsLoading(false)
        setUser(u)
      })
      .catch(e => {
        setIsLoading(false)
        setError(e.toString())
      })
  }

  return (
    <AuthContext.Provider value={{ isAuth: !!user, user, isLoading, error, onLogin, onRegister  }}>
      {children}
    </AuthContext.Provider>
  )
}
