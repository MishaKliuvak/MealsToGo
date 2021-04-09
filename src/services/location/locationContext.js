import React, { createContext, useEffect, useState } from "react"
import { locationRequest, locationTransform } from "./locationService"

export const LocationContext = createContext()

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null)
  const [loading, setLoading] = useState(false)
  const [keyword, setKeyword] = useState('San Francisco')
  const [error, setError] = useState(null)

  const onSearch = (searchKeyword) => {
    setLoading(true)
    setKeyword(searchKeyword)
  }

  useEffect(() => {
    if (!keyword) {
      return
    }

    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then(result => {
        setLoading(false)
        setLocation(result)
      })
      .catch(err => {
        setLoading(false)
        setError(err)
      })
  }, [keyword])

  return (
    <LocationContext.Provider value={{ loading, error, location, search: onSearch, keyword }}>
      {children}
    </LocationContext.Provider>
  )
}
