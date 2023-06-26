import React, { useState } from 'react';
import { Container, Logo, OrderCount } from "./styles";
import logo from '../../assets/logo.svg';
import Sidebar from '../Sidebar';
import { PiListBold, PiReceiptBold } from "react-icons/pi";

export function Header() {

  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <Container>

      <PiListBold onClick={showSiderbar}/>
      {sidebar && <Sidebar active={setSidebar} />}

      <Logo>
        <img src={logo} alt="" />
        <h1>food explorer</h1>
      </Logo>


      <OrderCount>
        <button>
          <div>
            <a>+9</a>
          </div>
          <PiReceiptBold />
        </button>
      </OrderCount>
    </Container>
  )
}