import { styled } from "styled-components";
import { css } from "styled-components";

export const FontBody600 = styled.span`
    font: 600 1.4rem/2.4rem "Inter", sans-serif;
    ${({color}) => {
        if (color === "black"){
            return css`
            color: var(--color-grey-600);        
            `
        } else {
            return css`
            color: var(--color-grey-300);
            `
        }
    }}
`