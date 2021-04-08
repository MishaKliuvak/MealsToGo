import React, { createContext, useEffect, useState } from "react"
import { locationRequest, locationTransform } from "./locationService"

export const LocationContext = createContext()

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null)
  const [loading, setLoading] = useState(false)
  const [keyword, setKeyword] = useState('san francisco')
  const [error, setError] = useState(null)

  const onSearch = (searchKeyword) => {
    setLoading(true)
    setKeyword(searchKeyword)
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then(result => {
        setLoading(false)
        setLocation(result)
        console.log(result)
      })
      .catch(err => {
        setLoading(false)
        setError(err)
      })
  }

  useEffect(() => {
    onSearch(keyword)
  },[])

  return (
    <LocationContext.Provider value={{ loading, error, location, search: onSearch }}>
      {children}
    </LocationContext.Provider>
  )
}
