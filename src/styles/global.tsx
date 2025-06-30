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
        line-height: 160%;
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
        line-height: 160%;
      }

      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        &:focus-visible {
          outline: 1px solid ${theme.blue};
          outline-offset: 4px;
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

      header,
      main {
        .content {
          max-width: 864px;
          margin: 0 auto;
          padding: 1rem;
          ${theme.mediaQuery.lg} {
            padding: 0;
          }
        }
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
      body > footer {
        text-align: center;
        padding: 2rem;
      }
    `}

`;
