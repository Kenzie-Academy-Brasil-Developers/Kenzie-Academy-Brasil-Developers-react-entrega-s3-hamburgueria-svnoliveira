import { styled } from "styled-components";

export const StyledCartCard = styled.li`
    height: 8rem;
    display: flex;
    flex-direction: row;
    img {
        width: 8rem;
        border-radius: 0.5rem;
        background-color: var(--color-grey-0);
        object-fit: contain;
    }

    .text-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .text-container > h3{
        width: 70%;
        padding-left: 0.9rem;
    }

    .text-container > button{
        height: fit-content;
        align-self: center;
        cursor: default;
    }

    .text-container > svg{
        fill: var(--color-grey-100);
        width: 2.4rem;
        height: 2.4rem;
    }
`