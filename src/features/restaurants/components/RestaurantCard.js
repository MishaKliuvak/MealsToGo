import React from 'react'
import { Text, View, Image } from 'react-native'
import { Card } from 'react-native-paper'
import styled from "styled-components"
import { SvgXml } from 'react-native-svg'

import star from '../../../../assets/star'
import open from '../../../../assets/open'
import { Spacer } from "../../../components/Spacer"

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

const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`

const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`

export const RestaurantCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://media-cdn.tripadvisor.com/media/photo-s/1a/18/3a/cb/restaurant-le-47.jpg'
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true
  } = restaurant

  const ratingArray = Array.from(new Array(Math.floor(rating)))

  return (
    <RestaurantCardItem elevation={2}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(rating => <SvgXml xml={star} width={20} height={20}/> )}
          </Rating>
          <SectionEnd>
            { isClosedTemporarily && (
              <Text variant='label' style={{ color: 'red' }}>
                Closed Temporarily
              </Text>
            ) }
            <Spacer position='left' size='large'>
              { isOpenNow && <SvgXml xml={open} width={20} height={20}/> }
            </Spacer>
            <Spacer position='left' size='large'>
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCardItem>
  )
}

