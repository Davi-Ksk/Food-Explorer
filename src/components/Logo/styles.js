import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > svg {
    margin-right: 10.74px;
  }

  > h1 {
    font-family: 'Roboto';
    font-size: 3.724rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    line-height: 44px;
  }
`;

