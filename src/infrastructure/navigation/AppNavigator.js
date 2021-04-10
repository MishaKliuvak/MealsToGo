import React, { useContext } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"
import { RestaurantNavigator } from "./RestaurantNavigator"

import { MapScreen } from "../../features/map/screens/MapScreen"

const Tab = createBottomTabNavigator()
import { LocationContextProvider } from "../../services/location/locationContext"
import { RestaurantContextProvider } from "../../services/restaurants/restaurantContext"
import { FavouritesContextProvider } from "../../services/favourites/favouritesContext"
import { SettingsNavigator } from "./SettingsNavigator"



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

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantContextProvider>
        <Tab.Navigator
          screenOptions={screenOptions}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsNavigator} />
        </Tab.Navigator>
      </RestaurantContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
)
