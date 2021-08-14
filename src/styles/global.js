import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --gray: #3E3E3E;
        --gray-light:  #C4C4C4;
        --black: #000;
        --orange: #FF6109;
        --white: #FFF;
    }

    body {
        font-family: 'Roboto';
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
