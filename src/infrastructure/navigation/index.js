import React, { useContext } from 'react'
import { AppNavigator } from "./AppNavigator"
import { AuthContext } from "../../services/auth/authContext"
import { AccNavigator } from "./AccNavigator"
import { NavigationContainer } from "@react-navigation/native"

export const Navigation = () => {
  const { isAuth } = useContext(AuthContext)

  return (
    <NavigationContainer>
      { isAuth ? <AppNavigator /> : <AccNavigator /> }
    </NavigationContainer>
  )
}
