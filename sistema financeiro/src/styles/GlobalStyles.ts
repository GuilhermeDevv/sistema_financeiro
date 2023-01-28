import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: 0;
    list-style: none;
    outline: none;
    font-family: 'Mulish', sans-serif;
}
a{
    text-decoration: none;
    color: white;
}
html{
    font-size: 62.5%;
}
body{
    width: 100%;
    height: 100%;
}
img{
    max-width: 100%;
    display: block;
}
`;

export const colors = {
  primary: '#FFFFFF',
  secondary: '#808080',
  tertiary: '#FFD700',
};
