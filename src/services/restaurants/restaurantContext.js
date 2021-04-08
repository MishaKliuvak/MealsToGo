import React, { useState, createContext, useEffect, useMemo } from 'react'

import { restaurantsRequest, restaurantsTransform } from "./restaurantService"

export const RestaurantContext = createContext()

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const retrieveRestaurants = () => {
    setLoading(true)
    setTimeout(() => {
      restaurantsRequest()
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
    retrieveRestaurants()
  }, [])

  return (
    <RestaurantContext.Provider value={{ restaurants, loading, error }}>
      {children}
    </RestaurantContext.Provider>
  )
}
