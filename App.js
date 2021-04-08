import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { RestaurantScreen } from "./src/features/restaurants/screens/RestaurantScreen"

import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/infrastructure/theme'

import {
  useFonts,
  Oswald_400Regular
} from '@expo-google-fonts/oswald'
import { Lato_400Regular } from '@expo-google-fonts/lato'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Settings = () => <Text>Setting</Text>

const Map = () => <Text>Map</Text>

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
}

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({ size, color }) => <Ionicons name={iconName} size={size} color={color} />
  }
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
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={screenOptions}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>

      </ThemeProvider>
    </>
  )
}


