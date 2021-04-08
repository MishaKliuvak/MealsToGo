import React from 'react'
import { Text, View } from 'react-native'
import { Card } from 'react-native-paper'
import styled from "styled-components"
import { SvgXml } from 'react-native-svg'
import star from '../../../../assets/star'

const Title = styled(Text)`
  color: ${props => props.theme.colors.ui.primary};
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.body};
`

const Address = styled(Text)`
  color: ${props => props.theme.colors.ui.primary};
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.caption};
`

const RestaurantCardItem = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
`

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`

const Info = styled(View)`
  padding: ${props => props.theme.space[3]};
`

const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${props => props.theme.space[2]};
  padding-bottom: ${props => props.theme.space[2]};
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

  const ratingArray = Array.from(new Array(Math.floor(rating)))

  return (
    <RestaurantCardItem elevation={2}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Rating>
          {ratingArray.map(rating => <SvgXml xml={star} width={20} height={20}/> )}
        </Rating>
        <Address>{address}</Address>
      </Info>
    </RestaurantCardItem>
  )
}

