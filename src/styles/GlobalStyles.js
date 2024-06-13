import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
    font-family: "Josefin Sans", sans-serif;
  }

  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    margin: 0;
    background-color: #111;
    
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }  
`;
