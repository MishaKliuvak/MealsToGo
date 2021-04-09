import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { RestaurantNavigator } from "./RestaurantNavigator"
import { NavigationContainer } from "@react-navigation/native"

import { MapScreen } from "../../features/map/screens/MapScreen"

const Tab = createBottomTabNavigator()

const Settings = () => <Text>Setting</Text>


const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({ size, color }) => <Ionicons name={iconName} size={size} color={color} />
  }
}

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
}

export const Navigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
)
