import React, { useState, useEffect } from 'react'

import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/infrastructure/theme'

import { RestaurantContextProvider } from "./src/services/restaurants/restaurantContext"
import { LocationContextProvider } from "./src/services/location/locationContext"
import { FavouritesContextProvider } from "./src/services/favourites/favouritesContext"

import {
  useFonts,
  Oswald_400Regular
} from '@expo-google-fonts/oswald'
import { Lato_400Regular } from '@expo-google-fonts/lato'
import { Navigator } from "./src/infrastructure/navigation/Navigator"

import * as firebase from 'firebase'
import { AuthContextProvider } from "./src/services/auth/authContext"

const firebaseConfig = {
  apiKey: "AIzaSyBElmyln4Fzm4ya2BX1w0a6KIevH9HzQO0",
  authDomain: "meals-to-go-e53e4.firebaseapp.com",
  projectId: "meals-to-go-e53e4",
  storageBucket: "meals-to-go-e53e4.appspot.com",
  messagingSenderId: "44183147004",
  appId: "1:44183147004:web:0ceac2cee84255543e6279"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default function App() {
  const [oswaldLoaded] = useFonts({ Oswald_400Regular })
  const [latoLoaded] = useFonts({ Lato_400Regular })

  if (!latoLoaded || !oswaldLoaded) {
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantContextProvider>
                <Navigator />
              </RestaurantContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </>
  )
}


