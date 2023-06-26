import React from 'react'
import { Container } from './styles'
import { PiMagnifyingGlass } from 'react-icons/pi'

export const Searchbar = ({ Text }) => {
  return (
    <Container >
      <PiMagnifyingGlass size={24}/>
      <input 
          type="text" 
          placeholder="Busque por pratos ou ingredientes"
          // onChange={e => {search(e.target.value)}}
      />
    </Container>
  )
}

