import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    padding: 3rem;
    border-radius: 2.5rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    border: 3px solid #ebebeb;
    background: transparent;
    color: var(--black);

    img {
        width: 25rem;
        height: 25rem;
        margin: 0 auto;
    }

    p {
        font-size: 2rem;
        margin-bottom: 0.8rem;
    }

    h3 {
        color: #1d1d1d;
        font-weight: 700;
        font-size: 4rem;
        margin-bottom: 2.4rem;
    }
`;

export const BuyButton = styled(Link)`
    width: 100%;
    padding: 1rem 0;
    border-radius: 1rem;
    background-color: var(--blue);
    font-size: 2.4rem;
    color: var(--white);
    text-align: center;
`;
