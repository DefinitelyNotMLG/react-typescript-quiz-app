import { createGlobalStyle } from "styled-components";
import BGimage from "./Images/R6.png"

export const GlobalStyle = createGlobalStyle`
html {
    hight: 100%;
}
body {
    background-image: url(${BGimage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}
* {
    box-sizing: border-box;
    font-family: "Catamaran", sans-serif;
}
`
