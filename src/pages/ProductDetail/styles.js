import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    margin: 10rem auto;
    display: flex;
    gap: 7rem;
    width: Min(90%, 120rem);

    @media (max-width: 1130px) {
        gap: 2rem;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const DetailImg = styled.div`
    background-color: #fafafa;
    border-radius: 1rem;

    @media (max-width: 1130px) {
        display: grid;
        place-items: center;
    }

    img {
        width: 50rem;
        height: 56rem;

        @media (max-width: 1130px) {
            width: 40rem;
            height: 40rem;
        }

        @media (max-width: 470px) {
            width: 100%;
        }
    }
`;

export const DetailContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    p {
        color: #161616;
        font-size: 4.8rem;
        font-weight: 600;
    }

    small {
        color: #d0d0d0;
        font-size: 2.4rem;

        @media (max-width: 1130px) {
            font-size: 2rem;
        }
    }

    h4 {
        font-size: 6.4rem;
        color: #161616;
        font-weight: 700;

        @media (max-width: 1130px) {
            font-size: 5.6rem;
        }
    }
`;

export const DetailSizesBox = styled.div`
    display: flex;
    gap: 1rem;
`;

export const DetailSizesButton = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: #e0e0e0; */
    /* color: #000000; */
    font-size: 3.2rem;
    border-radius: 1.5rem;
    width: 7rem;
    height: 7rem;
    border: 0;

    background-color: ${props => props.sizeSelected ? '#6f6f6f' : '#e0e0e0'};
    color: ${props => props.sizeSelected ? '#efefef' : '#000000'};

    &.active {
        background-color: #6f6f6f;
        color: #efefef;
    }

    @media (max-width: 1130px) {
        width: 6rem;
        height: 6rem;
    }
`;

export const DetailBuyBox = styled.div`
    display: flex;
    gap: 1.6rem;

    @media (max-width: 1130px) {
        flex-direction: column;
        width: 25rem;
    }

    @media (max-width: 768px) {
        flex-direction: row;
        width: auto;
    }

    @media (max-width: 515px) {
        -ms-flex-direction: column;
        flex-direction: column;
    }

    div {
        padding: 1rem 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 4rem;
        background-color: #f0f0f0;
        color: #161616;
        font-size: 4rem;
        border-radius: 2rem;

        svg {
            cursor: pointer;
        }

        @media (max-width: 515px) {
            width: 25rem;
        }
    }
`;

export const AddToCartButton = styled(Link)`
    background-color: #233baa;
    color: #ffffff;
    font-size: 3.2rem;
    border: 0;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1.5rem 4rem;
`;
