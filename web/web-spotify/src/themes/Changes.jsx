import styled from 'styled-components';

export const HomeContainer = styled.div`
    background-color: ${({ theme }) => theme.bgc};
    .userName {
        color: ${({ theme }) => theme.text};
    }
    .imagenUser {
        border-color: rgb(0, 233, 233)
    }
    .centro {
        border-color: ${({ theme }) => theme.centerBorderColor};
    }
`;

export const NavBarContainer = styled.div `
    .me-2 {
        background-color: ${({ theme }) => theme.profileBGC};
        color: ${({ theme }) => theme.text};
    }
`;