import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { RestaurantScreen } from "./src/features/restaurants/screens/RestaurantScreen"

export default function App() {
  return (
    <>
      <RestaurantScreen />
      <ExpoStatusBar style='auto' />
    </>
  )
}


