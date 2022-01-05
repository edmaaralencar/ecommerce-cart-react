import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
    width: Min(90%, 120rem);
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1.5rem 0;

    nav {
        display: flex;
        gap: 2rem;
        align-items: center;
    }
`;

export const NavbarLinkButton = styled(Link)`
    font-size: 2.4rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    border: 0;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    background-color: var(--blue);
    color: var(--white);
`;

export const Logo = styled(Link)`
    font-size: 3.2rem;
    cursor: pointer;
    text-decoration: none;
    color: #000000;
`;

export const NavbarLink = styled(Link)`
    font-size: 2.4rem;
    cursor: pointer;
    text-decoration: none;
    color: #000000;
`;
