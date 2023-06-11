import { css, styled } from "styled-components";

export const StyledButton = styled.button`

    transition: 0.5s;
    border-radius: 8px;
    font: 600 1.6rem "Inter", sans-serif;

    ${({color}) =>{
        if (color === "green"){
            return css`
            background-color: var(--color-primary);
            color: white;
            fill: white;
            &:hover {
            opacity: 0.5;
            }
            `
        } else if (color === "grey"){
            return css`
            background-color: var(--color-grey-100);
            color: var(--color-grey-300);
            fill: var(--color-grey-300);
            &:hover {
            background-color: var(--color-grey-300);
            color: var(--color-grey-100);
            fill: var(--color-grey-100);
            }
            `
        }
    }}

    ${({mode}) => {
        if (mode === "default"){
            return css`
            padding: 2rem;
            `
        } else if (mode === "medium"){
            return css`
            padding: 1rem 2rem;
            `
        } else {
            return css`
            padding: 0.5rem 0.7rem;
            font: 900 1.4rem/1.4rem "Inter", sans-serif;
            `
        }
    }}
`

export const StyledInput = styled.input`
    padding: 2rem;
    border: 0.2rem solid var(--color-grey-100);
    border-radius: 0.8rem;
    color: var(--color-grey-300);
    font: 400 1.6rem/1.9rem "Inter", sans-serif;

    &::placeholder {
        color: var(--color-grey-100);
    }

    &:focus {
        border-color: var(--color-grey-600);
    }
`