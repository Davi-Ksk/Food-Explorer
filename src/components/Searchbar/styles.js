import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 4.8rem;
  padding: 1.2rem 1.4rem;
  gap: 1.4rem;

  border-radius: 5px;
  background: ${({ theme }) => theme.COLORS.DARK_900};

  > input {
    width: 100%;
    
    background: transparent;
    border: none;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-size: 1.6rem;
    font-family: Roboto, sans-serif;
    text-overflow: ellipsis;
  }
`;