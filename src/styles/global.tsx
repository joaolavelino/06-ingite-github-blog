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
      a {
        ${theme.font.text};
        color: ${theme.base.text};
        line-height: 160%;
      }
      a {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-direction: column;
        text-decoration: none;
        color: ${theme.blue};
        font-weight: bold;
        font-size: 0.75rem;
        text-transform: uppercase;
        svg {
          color: ${theme.blue};
        }
        .link-text {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .underline {
          width: 100%;
          height: 2px;
          background-color: ${theme.blue};
          transform: scaleX(0);
          transform-origin: left center; /* Animation starts from left */
          transition: transform 0.2s cubic-bezier(0.65, 0, 0.35, 1); /* Smooth easing */
        }
        &:visited {
          color: ${theme.blue};
        }
        &:hover {
          .underline {
            transform: scaleX(1);
          }
        }
        ${theme.pressAnimation}
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
      .tags {
        display: flex;
        gap: 1rem;
        ${theme.font.title};
        & > span {
          background-color: ${theme.base.label};
          padding: 0 0.5rem;
          border-radius: 1rem;
          text-transform: uppercase;
          font-size: 0.75rem;
        }
      }
    `}

`;
