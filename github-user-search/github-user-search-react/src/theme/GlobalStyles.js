import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    --background: ${({ theme }) => theme.colors.background};
    --primary: ${({ theme }) => theme.colors.primary};
    --secondary: ${({ theme }) => theme.colors.secondary};
    --fontColor: ${({ theme }) => theme.colors.fontColor};
    --fontColorHighlighted: ${({ theme }) => theme.colors.fontColorHighlighted};
    --box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;
