import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    ${({ theme }) => css`
      //font declarations
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      button {
        ${theme.font.title};
        color: ${theme.base.title};
      }
      h3,
      h4,
      h5,
      h6 {
        color: ${theme.base.subtitle};
      }
      p,
      span,
      a {
        ${theme.font.text};
        color: ${theme.base.text};
      }

      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        &:focus {
          outline: 0;
          box-shadow: 0 0 0 2px ${theme.blue[500]};
        }
        //text scale on small devices

        ${theme.mediaQuery.xsm} {
          font-size: 0.825rem;
        }
      }
      body {
        background-color: ${theme.base.bg};
        color: ${theme.base.text};
        font: 1rem/1.6 "Roboto", sans-serif;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
      }
      button {
        outline: none;
        cursor: pointer;
        &:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
      }

      .content-container {
        padding: 1.25;
      }
    `}

`;
