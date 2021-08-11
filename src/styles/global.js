import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {

    }
    
    body, input, button {
        font-size: 1rem;
    }

    h1, h2,h3,h4,h5,h6 {

    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    ul, li {
        list-style: none;
    }

`;
