import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { RestaurantScreen } from "./src/features/restaurants/screens/RestaurantScreen"

import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/infrastructure/theme'

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
        <ExpoStatusBar style='auto' />
      </ThemeProvider>
    </>
  )
}


