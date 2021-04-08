import React, { createContext, useEffect, useState } from "react"
import { locationRequest, locationTransform } from "./locationService"

export const LocationContext = createContext()

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null)
  const [loading, setLoading] = useState(false)
  const [keyword, setKeyword] = useState('San Francisco')
  const [error, setError] = useState(null)

  const onSearch = (searchKeyword) => {
    if (!searchKeyword) {
      return
    }

    setLoading(true)
    setKeyword(searchKeyword)

    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then(result => {
        setLoading(false)
        setLocation(result)
      })
      .catch(err => {
        setLoading(false)
        setError(err)
      })
  }

  return (
    <LocationContext.Provider value={{ loading, error, location, search: onSearch, keyword }}>
      {children}
    </LocationContext.Provider>
  )
}
