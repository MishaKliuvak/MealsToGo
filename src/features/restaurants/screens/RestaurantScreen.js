import React from 'react'
import { SafeAreaView, StatusBar, View } from "react-native"
import { Searchbar } from "react-native-paper"
import styled from 'styled-components'

import { RestaurantCard } from "../components/RestaurantCard"

const SafeAreaViewContainer = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`

const ListContainer = styled(View)`
  flex: 1;
  padding: ${props => props.theme.space[3]};
`

export const RestaurantScreen = () => {
  return (
    <SafeAreaViewContainer>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <ListContainer>
        <RestaurantCard />
      </ListContainer>
    </SafeAreaViewContainer>
  )
}
