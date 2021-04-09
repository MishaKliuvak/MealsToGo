import React from 'react'

import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/infrastructure/theme'

import { RestaurantContextProvider } from "./src/services/restaurants/restaurantContext"
import { LocationContextProvider } from "./src/services/location/locationContext"

import {
  useFonts,
  Oswald_400Regular
} from '@expo-google-fonts/oswald'
import { Lato_400Regular } from '@expo-google-fonts/lato'
import { Navigator } from "./src/infrastructure/navigation/Navigator"

export default function App() {
  const [oswaldLoaded] = useFonts({ Oswald_400Regular })
  const [latoLoaded] = useFonts({ Lato_400Regular })

  if (!latoLoaded || !oswaldLoaded) {
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <Navigator />
          </RestaurantContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
    </>
  )
}


