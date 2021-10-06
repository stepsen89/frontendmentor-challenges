import "./App.css";
import Header from "./Header";
import Container from "./Container";
import { GlobalStyles } from "./theme/GlobalStyles";
import { useTheme } from "./theme/useTheme";
import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";

function App() {
  // 3: Get the selected theme, font list, etc.
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />

          <Header />
          <Container />
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
