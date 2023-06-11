import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
	--color-primary: #27ae60;
	--color-secondary: #eb5757;
	--color-grey-600: #333333;
	--color-grey-300: #828282;
	--color-grey-100: #e0e0e0;
	--color-grey-0: #f5f5f5;
	--color-negative: #e60000;
	--color-warning: #ffcd07;
	--color-sucess: #168821;
	--color-information: #155bcb;
	font-size: 62.5%;
}

header {
	background-color: var(--color-grey-0);
	padding: clamp(0rem, 4%, 1.6rem);
}

header > div, main {
	max-width: clamp(0rem, 100%, 137rem);
	margin: auto;
}


`
export const alignJustifyCenter = css`
	display: flex;
	align-items: center;
	justify-content: center;
`