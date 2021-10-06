import { useEffect, useState } from "react";
import { setToLS, getFromLS } from "./storage";

export const useTheme = () => {
  const themes = getFromLS("all-themes");
  const [theme, setTheme] = useState(themes.data.dark);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode) => {
    setToLS("theme", mode);
    setTheme(mode);
    console.log(mode);
  };

  useEffect(() => {
    const localTheme = getFromLS("theme");
    localTheme ? setTheme(localTheme) : setTheme(themes.data.light);
    setThemeLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { theme, themeLoaded, setMode };
};
