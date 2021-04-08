import React from 'react'
import { View, FlatList } from "react-native"
import { Searchbar } from "react-native-paper"
import styled from 'styled-components'

import { RestaurantCard } from "../components/RestaurantCard"
import { Spacer } from "../../../components/Spacer"

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  }
})``

export const RestaurantScreen = () => {
  return (
    <>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          ]}
        renderItem={() => <Spacer position='bottom' size='large'>
          <RestaurantCard />
        </Spacer>}
        keyExtractor={(item) => item.name}
      />
    </>
  )
}
