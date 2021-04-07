import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { RestaurantScreen } from "./src/features/restaurants/screens/RestaurantScreen"

import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/infrastructure/theme'

import {
  useFonts,
  Oswald_400Regular
} from '@expo-google-fonts/oswald'
import { Lato_400Regular } from '@expo-google-fonts/lato'

export default function App() {
  const [oswaldLoaded] = useFonts({ Oswald_400Regular })
  const [latoLoaded] = useFonts({ Lato_400Regular })

  if (!latoLoaded || !oswaldLoaded) {
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
        <ExpoStatusBar style='auto' />
      </ThemeProvider>
    </>
  )
}


