import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  padding: 2rem 2.8rem;
  /* padding-left:   padding-right: 2.8rem; */
  width: 100%;
  height: 7.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  user-select: none;

  .menu-icon {
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;

    :hover {
      opcacity: 0.8;
    }

    > path {
      fill: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  .search {
      display: none;
  }

  .sign-out {
    display: none;
  }

  @media (min-width: 768px) {
    height: 8rem;
    padding: 2rem 2rem;
    justify-content: center;
    gap: 3.2rem;

    .menu-icon {
      display: none;
    }

    .search {
      display: block;
      width: clamp(30rem, 10rem + 35vw, 58.1rem);
    }

    .sign-out { 
      display: block;
      cursor: pointer;
      
      > svg {
        height: 3.2rem;
        width: 3.2rem;
      }

      :hover {
        opacity: 0.8;
      }
    }

  }


`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  user-select: none;
  > img {
    margin-right: 10.74px;
  }

  > h1 {
    font-family: 'Roboto';
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    line-height: 44px;
  }
`;

export const OrdersMobile = styled.button`

  position: relative;
  background-color: transparent;
  border: none;

    > .count {
      position: absolute;
      left: 12px;
      top: -9px;
      
      max-width: 28px;
      min-width: 22px;
      
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      border-radius: 50px;
      padding: 0.3rem 0.5rem;
      
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      text-align: center;
      font-size: 1.4rem;
      font-weight: 300;

    }

    > svg {
      width: 2.4rem;
      height: 2.4rem;
      
      > path {
        fill: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }
        
    @media (min-width: 768px) {
        display: none;
      }

`;

export const OrdersDesktop = styled.button`
  display: none;
  align-items: center;
  justify-content: center;

  width: 21.6rem;
  gap: 0.8rem;
  padding: 1rem 4rem;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  border: none;
  border-radius: 5px;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 1.4rem;
  font-family: Poppins, sans-serif;
  line-height: 2.4rem;

  transition: background-color 0.2s;

  > svg {
    width: 3.2rem;
    height: 3.2rem;
  }

  :hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_300};
  }

  @media (min-width: 768px) {
      display: flex;
  }
`;