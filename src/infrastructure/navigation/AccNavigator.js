import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { Text, View } from 'react-native'
const Stack = createStackNavigator()

export const AccNavigator = () => {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Main' component={() => (
        <View>
          <Text>Account</Text>
        </View>
      )} />
      <Stack.Screen name='Login' component={() => (
        <View>
          <Text>Login</Text>
        </View>
      )} />
    </Stack.Navigator>
  )
}
