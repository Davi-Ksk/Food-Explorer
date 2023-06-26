import React from 'react'

import { Searchbar } from '../Searchbar'
import { SidebarItem } from '../SidebarItem'

import { Container, Content } from './styles'
import { PiXBold, PiSignInBold } from 'react-icons/pi'


const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>

      <div className="sidebar-header">
        <PiXBold onClick={closeSidebar} />
        <h2>Menu</h2>  
      </div>

      <Content>
        <Searchbar />
        <SidebarItem Icon={PiSignInBold} Text="Sair" />
      </Content>
      
    </Container>
  )
}

export default Sidebar