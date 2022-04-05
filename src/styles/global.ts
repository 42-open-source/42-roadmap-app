import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
  css
} from 'styled-components'

export const GlobalStyles: GlobalStyleComponent<
  // eslint-disable-next-line @typescript-eslint/ban-types
  {},
  DefaultTheme
> = createGlobalStyle`
  li {
    list-style: none;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before, &::after {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%;
  }

  ${({ theme }) => css`
    body {
      font-family: ${theme.font.family};
      font-weight: ${theme.font.weights.light};
      font-size: ${theme.font.sizes.medium};
      background: ${theme.colors.black500};
      color: ${theme.colors.white100};
    }
    button,
    a {
      font-family: ${theme.font.family};
      text-decoration: none;
      color: unset;
    }
  `}
`
