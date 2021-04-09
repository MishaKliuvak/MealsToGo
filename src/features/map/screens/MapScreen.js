import React, { useContext, useState, useEffect } from 'react'
import MapView from 'react-native-maps'
import styled from "styled-components/native"
import { Search } from "../components/Search"
import { LocationContext } from "../../../services/location/locationContext"
import { RestaurantContext } from "../../../services/restaurants/restaurantContext"

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`

export const MapScreen = () => {
  const { location } = useContext(LocationContext)
  const { restaurants = [] } = useContext(RestaurantContext)
  return (
    <>
      <Search />
      <Map>

      </Map>
    </>
  )
}
