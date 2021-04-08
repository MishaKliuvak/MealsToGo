import React from 'react'

import { SvgXml } from 'react-native-svg'

import star from '../../../../assets/star'
import open from '../../../../assets/open'
import { Spacer } from "../../../components/Spacer"
import { Text } from '../../../components/Text'
import { Icon, Address, RestaurantCardItem, RestaurantCardCover, Info, Rating, Section, SectionEnd } from "./CardStyles"

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
        <Text variant='label'>{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((rating, index) => <SvgXml key={`star-${index.toString()}`} xml={star} width={20} height={20}/> )}
          </Rating>
          <SectionEnd>
            { isClosedTemporarily && (
              <Text variant='error'>
                CLOSED TEMPORARILY
              </Text>
            ) }
            <Spacer position='left' size='large'>
              { isOpenNow && <SvgXml xml={open} width={20} height={20}/> }
            </Spacer>
            <Spacer position='left' size='large'>
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCardItem>
  )
}

