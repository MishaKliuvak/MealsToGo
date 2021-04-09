import React, { useContext, useState } from 'react'
import { View, FlatList, TouchableOpacity } from "react-native"
import { ActivityIndicator, Colors } from "react-native-paper"
import styled from 'styled-components'

import { RestaurantCard } from "../components/RestaurantCard"
import { Spacer } from "../../../components/Spacer"
import { SafeArea } from "../components/SafeArea"

import { RestaurantContext } from "../../../services/restaurants/restaurantContext"
import { FavouritesContext } from "../../../services/favourites/favouritesContext"
import { Search } from "../components/Search"
import { FavouritesBar } from "../../../components/FavouritesBar"
import { RestaurantList } from "../components/RestaurantList"


const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`

const LoadingContainer = styled(View)`
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
`

export const RestaurantScreen = ({ navigation }) => {
  const { restaurants, loading, error } = useContext(RestaurantContext)
  const { favourites } = useContext(FavouritesContext)
  const [isToggled, setIsToggled] = useState(false)
  return (
    <SafeArea>
      {
        loading && (
          <LoadingContainer>
            <Loading
              size={50}
              animating={true}
              color={Colors.blue300}
            />
          </LoadingContainer>
        )
      }
      <Search
        isFavouriteToggled={isToggled}
        onFavouriteToggled={() => setIsToggled(!isToggled)}
      />
      {isToggled &&
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      }

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('RestaurantDetail', { restaurant: item })}
          >
            <Spacer position='bottom' size='large'>
              <RestaurantCard restaurant={item}/>
            </Spacer>
          </TouchableOpacity>
        )
        }
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  )
}
