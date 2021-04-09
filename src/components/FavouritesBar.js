import React from 'react'
import styled from "styled-components/native"
import { ScrollView, TouchableOpacity } from 'react-native'
import { CompactRestaurantInfo } from "./restaurant/CompactRestaurantInfo"
import { Spacer } from "./Spacer"
import { Text } from "./Text"

const FavouriteWrapper = styled.View`
  padding: 10px;
`
export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) return null

  return (
    <FavouriteWrapper>
      <Spacer position="left" size='medium'>
        <Text variant="body">Favourites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map(restaurant =>  {
          const key = restaurant.name;
          return (
            <Spacer position='left' size='medium' key={key}>
              <TouchableOpacity
                onPress={() => onNavigate('RestaurantDetail', { restaurant: restaurant })}
              >
                <CompactRestaurantInfo
                  restaurant={restaurant}
                />
              </TouchableOpacity>
            </Spacer>
          )
        })}
      </ScrollView>
    </FavouriteWrapper>
  )
}
