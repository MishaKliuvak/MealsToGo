import React, { useState, createContext, useEffect, useMemo, useContext } from 'react'

import { restaurantsRequest, restaurantsTransform } from "./restaurantService"
import { LocationContext } from "../location/locationContext"

export const RestaurantContext = createContext()

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { location } = useContext(LocationContext)

  const retrieveRestaurants = (loc) => {
    setLoading(true)
    setRestaurants([])

    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then(results => {
          setRestaurants(results)
          setLoading(false)
        })
        .catch(err => {
          setLoading(false)
          setError(err)
        })
    }, 2000)
  }

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`
      retrieveRestaurants(locationString)
    }
  }, [location])

  return (
    <RestaurantContext.Provider value={{ restaurants, loading, error }}>
      {children}
    </RestaurantContext.Provider>
  )
}
