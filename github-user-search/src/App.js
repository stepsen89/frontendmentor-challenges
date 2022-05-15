import "./App.css";
import Header from "./Header";
import Container from "./Container";
import { GlobalStyles } from "./theme/GlobalStyles";
import { useTheme } from "./theme/useTheme";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";

function App({ th }) {
  const { theme, themeLoaded, setThemeTwo } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    let newTheme = setThemeTwo(th);
    setSelectedTheme(newTheme);
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

const mapStateToProps = (state) => {
  let th = state.theme.theme;
  return { th };
};

export default connect(mapStateToProps, {})(App);
