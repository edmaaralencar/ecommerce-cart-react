import styled from 'styled-components';

export const SectionHero = styled.section`
    background: var(--blue);
`;

export const Container = styled.div`
    width: Min(90%, 120rem);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 950px) {
        flex-direction: ${props => props.benefits ? 'row' : 'column'};
    }

    @media (max-width: 610px) {
        flex-direction: ${props => props.benefits && 'column'};
        gap: ${props => props.benefits ? '3rem' : '0'};
    }

    img {
        @media (max-width: 600px) {
            width: 30rem;
            height: 30rem;
        }
    }
`;

export const ContentHero = styled.div`
    @media (max-width: 950px) {
        padding-top: 3rem;
    }

    small {
        color: #d4d4d4;
        font-size: 1.6rem;
        margin-bottom: 1.6rem;
    }

    h1 {
        font-size: 6.4rem;
        font-weight: 600;
        color: #ffffff;
    }

    p {
        color: #ececec;
        font-size: 3rem;
        font-weight: 500;
        margin-top: 2.4rem;
    }
`;

export const SectionBenefits = styled.section`
    margin-top: 7.2rem;
`;

export const BenefitsItem = styled.div`
    display: flex;
    align-items: center;
    gap: 3.2rem;

    p {
        font-size: 2.4rem;
    }
`;

export const SectionProducts = styled.section`
    margin-top: 8rem;

    .container {
        width: Min(90%, 120rem);
        margin: 0 auto;

        h2 {
            font-size: 4.8rem;
            font-weight: 500;
        }
    }
`