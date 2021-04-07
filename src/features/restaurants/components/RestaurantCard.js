import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper'
import styled from "styled-components"

const Title = styled(Text)`
  padding: 16px;
`

const RestaurantCardItem = styled(Card)`
  background-color: white;
`

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`

export const RestaurantCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://media-cdn.tripadvisor.com/media/photo-s/1a/18/3a/cb/restaurant-le-47.jpg'
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily
  } = restaurant

  return (
    <RestaurantCardItem elevation={2}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCardItem>
  )
}

