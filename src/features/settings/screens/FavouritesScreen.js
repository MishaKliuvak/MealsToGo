import React, { useContext } from 'react'
import { FavouritesContext } from "../../../services/favourites/favouritesContext"
import { Text } from "../../../components/Text"
import { SafeArea } from "../../restaurants/components/SafeArea"
import styled from 'styled-components/native'
import { TouchableOpacity } from "react-native"
import { Spacer } from "../../../components/Spacer"
import { RestaurantCard } from "../../restaurants/components/RestaurantCard"
import { RestaurantList } from "../../restaurants/components/RestaurantList"
import { FadeInView } from "../../../components/animations/FadeAnimation"

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext)

  return favourites.length ? (

      <RestaurantList
        data={favourites}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('RestaurantDetail', { restaurant: item })}
          >
            <Spacer position='bottom' size='large'>
              <FadeInView>
                <RestaurantCard restaurant={item}/>
              </FadeInView>
            </Spacer>
          </TouchableOpacity>
        )
        }
        keyExtractor={(item) => item.name}
      />
  ) : (
    <NoFavouritesArea>
      <Text center>No favourites yet</Text>
    </NoFavouritesArea>
  )
}
