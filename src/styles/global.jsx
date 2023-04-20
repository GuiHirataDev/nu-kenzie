import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *, header {
        font-family: Arial, Helvetica, sans-serif
    }

    :root {
        --color-pink: #FD377E;
        --color-green: #03B898;
        --color-gray-0: #e6e8e9d6;
        --color-gray-1: #bababbd5;
        --color-gray-2: #868E96;
        --color-dark: #2a2831;

        --color-white-fixed: #FFF;
    }
`