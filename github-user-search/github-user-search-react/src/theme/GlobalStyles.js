import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
  }

#root {
   --primary: ${({ theme }) => theme.colors.primary};
  --secondary: ${({ theme }) => theme.colors.secondary};
  --card: ${({ theme }) => theme.colors.card};
}
`;
