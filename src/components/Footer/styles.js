import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 7.7rem;
  width: 100%;
  padding: 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  .logo {
    display: flex;
    align-items: center;
    gap: 0.65rem;

    > svg {
      width: 2.2rem;
      height: 2.2rem;
      
      > path {
        fill: ${({ theme }) => theme.COLORS.LIGHT_700};
      }
    }

    > h2 {
      font-family: 'Roboto', sans-serif;
      font-size: 1.52rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
      line-height: 44px;
    }
  }



  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    text-align: right;
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }
`;