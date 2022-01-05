import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const EmptyContainer = styled.div`
    height: 60rem;
    width: Min(90%,120rem);
    margin: 4rem auto;
    background-color: #fafafa;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    h1 {
        font-size: 7.2rem;
        text-align: center;

        span {
            font-size: 3.2rem;
            font-weight: normal;
            display: block;
            margin-top: 1rem;
        }
    }
`;

export const ShopLink = styled(Link)`
    background-color: #233baa;
    color: #ffffff;
    font-size: 1.6rem;
    border: 0;
    border-radius: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1.5rem 4rem;
`;

export const Container = styled.div`
    width: Min(90%, 120rem);
    margin: 4rem auto;
    background-color: #fafafa;
    padding: 4rem;
    border-radius: 1rem;

    .product-total {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            font-size: 2.4rem;

            span {
                font-size: 3rem;
                font-weight: bold;
            }
        }

        .checkout-button {
            background-color: #233baa;
            color: #ffffff;
            font-size: 1.6rem;
            border: 0;
            border-radius: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            padding: 1.5rem 4rem;
        }
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 1.6rem;

    .product-quantity {
        font-size: 2.5rem;
    }

    svg {
        cursor: pointer;
    }

    thead {
        @media (max-width: 650px) {
            display: none;
        }
    }

    thead {
        th {
            color: #999;
            text-align: left;
            padding: 12px 0;

            &:nth-child(3) {
                text-align: center;
            }
        }
    }

    tbody tr {
        border-bottom: 1px solid #eee;

        .product-subtotal {
            font-size: 2rem;
            font-weight: bold;
        }

        & td:nth-child(2) {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
            margin: 3rem 0;
        }
    }

    img {
        height: 100px;
    }

    .product-price {
        display: block;
        margin-top: 4px;
        font-size: 18px;
        font-weight: bold;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    button {
        background: none;
        border: 0;
        padding: 6px 8px;

        svg {
            @media (max-width: 650px) {
                width: 24px;
                height: 24px;
            }
        }
    }
`;
