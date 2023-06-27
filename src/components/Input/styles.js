import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    input {
        width: 100%;
        height: 4.8rem;
        
        padding: 1.6rem 1.4rem;
        
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        border-radius: 0.5rem;
        border: none;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};


        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }

    input:focus {
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_200};
        /* -webkit-box-shadow: 0px 0px 10px 5px #193746; 
        box-shadow: 0px 0px 10px 5px #193746; */
    }
    
    > svg {
        margin-left: 1.4rem;
    }
`;