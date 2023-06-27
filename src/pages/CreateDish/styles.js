import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 2.4rem;
  padding: 3.2rem;

  > .back {
    display: flex;
    align-items: center;

    width: 100%;

    cursor: pointer;

    > svg {
      width: 2.2rem;
      height: 2.2rem;

      > path {
        fill: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    > a {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 1.6rem;
      font-family: Poppins, sans-serif;
      text-decoration: none;
    }

  }

  > h1 {
    font-family: Poppins, sans-serif;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }


  > p {
    font-size: 1.6rem;
    font-family: Roboto, sans-serif;
  }

`;