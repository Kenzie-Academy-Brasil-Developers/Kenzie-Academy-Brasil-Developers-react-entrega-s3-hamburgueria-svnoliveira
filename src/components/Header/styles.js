import { styled } from "styled-components";
import { alignJustifyCenter } from "../../globalStyles/GlobalStyle";

export const StyledHeader = styled.div`
    ${alignJustifyCenter}
    min-height: 8rem;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 1rem;

    > #header-left-container {
        max-width: 115rem;
        padding-right: 1.7rem;
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    #header-left-container > img{
        width: 15rem;
        height: 2.3rem;
    }

    #header-left-container > div {
        position: relative;
    }

    #header-left-container > div > button {
        position: absolute;
        right: -11px;
        top: -16px;
    }

    #header-left-container > div > svg{
        min-width: 2.5rem;
        min-height: 2.5rem;
        margin-right: 0.8rem;
        fill: rgba(189, 189, 189, 1);
        cursor: pointer;
    }

    > #header-right-container {
        width: clamp(8rem, 100%, 54rem);
        position: relative;
        display: flex;
    }

    > #header-right-container > input{
        flex-grow: 1;
    }

    > #header-right-container > button{
        position: absolute;
        right: 1rem;
        top: 1rem;
    }

    @media (min-width: 597px){
        > #header-right-container {
        width: clamp(8rem, 100%, 36.5rem);
        }
    }

`