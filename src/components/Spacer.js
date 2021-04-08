import React from 'react'
import styled, { useTheme } from 'styled-components/native'

const sizes = {
  small: 1,
  medium: 2,
  large: 3
}

const positions = {
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom'
}

const getVariant = (position, size, theme) => {
  const sizeIndex = sizes[size]
  return `${positions[position]}: ${theme.space[sizeIndex]}`
}

const SpacerView = styled.View`
  ${({ variant }) => variant}
`

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme()
  const variant = getVariant(position, size, theme)

  return (
    <SpacerView variant={variant}>
      {children}
    </SpacerView>
  )
}

Spacer.defaultProps = {
  position: 'top',
  size: 'small'
}
