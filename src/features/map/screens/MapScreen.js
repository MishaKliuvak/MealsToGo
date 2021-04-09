import React, { useContext, useState, useEffect } from 'react'
import MapView from 'react-native-maps'
import styled from "styled-components/native"
import { Search } from "../components/Search"
import { LocationContext } from "../../../services/location/locationContext"
import { RestaurantContext } from "../../../services/restaurants/restaurantContext"
import { MapCallout } from "../components/MapCallout"

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`

export const MapScreen = () => {
  const { location } = useContext(LocationContext)
  const { viewport, lat, lng } = location
  const { restaurants = [] } = useContext(RestaurantContext)
  const [latDelta, setLatDelta] = useState(0)


  useEffect(() => {
    if (viewport) {
      const northeastLat = viewport.northeast.lat
      const southwestLat = viewport.northeast.lat

      setLatDelta(northeastLat - southwestLat)
    }


  }, [location, viewport])

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02
        }}
      >
        {restaurants.map(restaurant => (
          <MapView.Marker
            key={restaurant.name}
            title={restaurant.name}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng
            }}
          >
            <MapView.Callout>
              <MapCallout restaurant={restaurant} />
            </MapView.Callout>
          </MapView.Marker>
        ))}
      </Map>
    </>
  )
}
