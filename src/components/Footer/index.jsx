import React from 'react'

import { Container } from './styles'

export function Footer() {
  return (
    <Container>
      <div className='logo'>
      <svg 
        width="27" 
        height="31" 
        viewBox="0 0 27 31" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5391 0.5L26.5294 8V23L13.5391 30.5L0.548681 23V8L13.5391 0.5Z" fill="#065E7C"/>
        </svg>
        <h2>food explorer</h2>
      </div>

      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  )
}