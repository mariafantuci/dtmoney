import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --webkit-font-smoothing: antialiased;
        --red: #E62E4D;
        --blue: #5429CC;
        --light-blue: #6933FF;
        --green: #33CC95;
        --shape: #FFFFFF;
        --text-title: #363F5F;
        --body-text: #969CB3;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /**
    * font-size: 16px (desktop)
    */
    html{
        @media (max-width: 1080px) {
            font-size: 93.75%; /*15px*/
        }
        @media (max-width: 720px) {
            font-size: 87.5%;/* 14px */
        }
    }

    body, input, text-area, button {
        font-family: 'Poppins', sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
    }

    body{
        background: var(--background);
        --webkit-font-smoothing: antialiased;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
