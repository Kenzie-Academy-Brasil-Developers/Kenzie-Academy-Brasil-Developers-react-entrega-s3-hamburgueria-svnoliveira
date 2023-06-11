import { styled } from "styled-components";
import { alignJustifyCenter } from "../../globalStyles/GlobalStyle";

export const StyledModal = styled.section`
    ${alignJustifyCenter}
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 0;
    
    > div {
        background-color: white;
        width: clamp(15rem, 100%, 50rem);
        margin: 2rem;
        height: 41rem;
        border-radius: 0.5rem;
        display: flex;
        flex-direction: column;
    }

    #modal-header {
        height: 5.4rem;
        border-radius: 0.5rem 0.5rem 0 0;
        background-color: var(--color-primary);
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        padding: 2rem;
    }

    #modal-header > button{
        background-color: var(--color-primary);
        color: white;
        font-size: 1.8rem;
    }

    > div > ul {
        height: 20rem;
        padding: 2rem;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    #price-container {
        height: 6rem;
        border-top: 0.2rem solid var(--color-grey-100);
        margin: 0 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    > div > button {
        flex-grow: 1;
        margin: 2rem;
    }
`