import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};;
  
  font-family: Poppins;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  
  > svg {
    margin-right: 10px;
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
  }

  &:hover {
    background-color: ;
  }
`;