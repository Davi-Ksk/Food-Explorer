import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 100%;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;

  .sidebar-header {
    display: flex;
    align-items: center;
    padding: 2rem 2.8rem;
    gap: 1.6rem;

    height: 7.4rem;

    > svg {
      width: 2.4rem;
      height: 2.4rem;
      cursor: pointer;
      > path {
        fill: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    > h2 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 2.1163rem;
      font-family: Roboto, sans-serif;
      font-weight: 500;
      letter-spacing: 0.05rem;
    }
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 100%;
    }
  }

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.6rem;

  height: 100%;
  width: 100%;

  

  padding: 3.6rem 2.8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
`;