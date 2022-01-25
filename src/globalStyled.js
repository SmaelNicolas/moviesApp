import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
	text-decoration: none;

    }

    body{
        width: calc(100vw - (100vw - 100%));

        background-color: black;
    }
`;

export default GlobalStyle;
