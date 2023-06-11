import { styled } from "styled-components";

export const CardList = styled.ul`
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    padding: 3.2rem 0 0 1.6rem;
    gap: 2rem;

    @media (min-width: 650px) {
        gap: clamp(2rem, 3vw, 5.1rem);
        overflow-x: hidden;
        flex-wrap: wrap;
        justify-content: center;
    }

    @media (min-width: 1337px) {
        justify-content: flex-start;
    }
`