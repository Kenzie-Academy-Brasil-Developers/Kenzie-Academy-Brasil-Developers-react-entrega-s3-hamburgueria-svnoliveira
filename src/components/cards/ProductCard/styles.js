import { styled } from "styled-components";
import { alignJustifyCenter } from "../../../globalStyles/GlobalStyle";

export const StyledProductCard = styled.li`
    min-width: 30rem;
    min-height: 34.6rem;
    border: solid 0.2rem var(--color-grey-100);
    border-radius: 0.5rem;
    
    > picture {
        ${alignJustifyCenter}
        background-color: var(--color-grey-0);
        width: 100%;
        height: 15rem;
    }

    > picture > img {
        max-width: 17rem;
        max-height: 16rem;
        object-fit: fill;
    }

    > div {
        padding: 0 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 40%;
    }

    > div > span {
        color: var(--color-primary);
    }

    > button {
        margin: 0 2rem;
    }
`