import React, { useState } from 'react';

import Sidebar from '../Sidebar';
import { Searchbar } from '../Searchbar';

import { PiListBold, PiReceiptBold, PiSignOutBold } from "react-icons/pi";
import { Container, Logo, OrdersMobile, OrdersDesktop } from "./styles";
import logo from '../../assets/logo.svg';

export function Header() {

  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  const orders = "+9";

  return (
    <Container>

      <PiListBold onClick={showSiderbar} className="menu-icon"/>
      {sidebar && <Sidebar active={setSidebar} />}

      <Logo>
        <img src={logo} alt="" />
        <h1>food explorer</h1>
      </Logo>

      <div className="search">
        <Searchbar />
      </div>

      <OrdersMobile>
          <div className='count'>
            <a>{orders}</a>
          </div>
          <PiReceiptBold />
      </OrdersMobile>

      <OrdersDesktop>
        <PiReceiptBold />
        <p>Pedidos ({orders})</p>
      </OrdersDesktop>

      <div className='sign-out'>
        <PiSignOutBold />
      </div>
    </Container>
  )
}