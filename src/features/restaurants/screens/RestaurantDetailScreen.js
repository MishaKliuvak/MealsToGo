import React, { useState } from 'react'

import { RestaurantInfoCard } from "../components/RestaurantInfoCard"
import { List } from "react-native-paper"
import { ScrollView } from 'react-native'
import { SafeArea } from "../components/SafeArea"

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params

  const [breakfastExpanded, setBreakfastExpanded] = useState(false)
  const [lunchExpanded, setLunchExpanded] = useState(false)
  const [dinnerExpanded, setDinnerExpanded] = useState(false)
  const [drinksExpanded, setDrinksExpanded] = useState(false)


  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant}/>
      <ScrollView>
        <List.Accordion
          title='Breakfast'
          expanded={breakfastExpanded}
          left={(props) => <List.Icon {...props} icon="bread-slice" /> }
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Breakfast" />
          <List.Item title="Breakfast" />
        </List.Accordion>

        <List.Accordion
          title='Dinner'
          expanded={dinnerExpanded}
          left={(props) => <List.Icon {...props} icon="hamburger" /> }
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Breakfast" />
          <List.Item title="Breakfast" />
        </List.Accordion>

        <List.Accordion
          title='Lunch'
          expanded={lunchExpanded}
          left={(props) => <List.Icon {...props} icon="food-variant" /> }
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Breakfast" />
          <List.Item title="Breakfast" />
        </List.Accordion>

        <List.Accordion
          title='Drinks'
          expanded={drinksExpanded}
          left={(props) => <List.Icon {...props} icon="cup" /> }
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Breakfast" />
          <List.Item title="Breakfast" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  )
}
