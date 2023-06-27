import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Banner = styled.div`
  display: flex;
  
  width: 112rem;
  height: 26rem;

  background: ${({ theme }) => theme.COLORS.GRADIENT_200};

`;