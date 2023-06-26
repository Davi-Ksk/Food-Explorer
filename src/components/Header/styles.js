import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  padding: 2rem 2.8rem;
  width: 100%;
  height: 7.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  user-select: none;

  > svg {
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

export const OrderCount = styled.div`

  position: relative;
  
  > button {
    style: none;
    background-color: transparent;
    border: none;

    > div {
      position: absolute;
      left: 15px;
      top: -6px;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      border-radius: 50px;
      max-width: 28px;
      min-width: 24px;
      padding: 0.3rem 0.5rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      text-align: center;
      font-size: 1.4rem;

      > a {
        padding: 0;
      }

    }
    > svg {
      width: 3.2rem;
      height: 3.2rem;
      
      > path {
        fill: ${({ theme }) => theme.COLORS.LIGHT_100};
      }

    }
  }


`;