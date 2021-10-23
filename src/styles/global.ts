import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    outline: transparent;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    ${({ theme }) => css`
      background: ${theme.colors.background};

      color: ${theme.colors.text};
      -webkit-font-smoothing: antialiased;
    `}
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;

    font-size: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background 200ms;
  }

  body,
  input,
  textarea,
  button {
    ${({ theme }) => css`
      font-family: ${theme.typography.fontFamily};
      font-weight: ${theme.typography.fontWeight.normal};
    `}
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    ${({ theme }) => css`
      font-weight: ${theme.typography.fontWeight.bold};
    `}
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
