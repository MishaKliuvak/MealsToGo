import React, { useContext } from 'react'
import { View, FlatList } from "react-native"
import { Searchbar } from "react-native-paper"
import styled from 'styled-components'

import { RestaurantCard } from "../components/RestaurantCard"
import { Spacer } from "../../../components/Spacer"
import { SafeArea } from "../components/SafeArea"

import { RestaurantContext } from "../../../services/restaurants/restaurantContext"

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  }
})``

export const RestaurantScreen = () => {
  let { restaurants, loading, error } = useContext(RestaurantContext)

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          console.log(item)
          return <Spacer position='bottom' size='large'>
            <RestaurantCard restaurant={item}/>
          </Spacer>
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  )
}
