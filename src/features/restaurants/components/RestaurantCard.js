import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper'
import styled from "styled-components"

const Title = styled(Text)`
  padding: ${props => props.theme.space[3]};
  color: ${props => props.theme.colors.ui.primary};
  font-family: ${props => props.theme.fonts.body};
`

const RestaurantCardItem = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
`

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
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

