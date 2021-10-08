import { useEffect, useState } from "react";
import { setToLS, getFromLS } from "./storage";

export const useTheme = () => {
  const themes = getFromLS("all-themes");
  const [theme, setTheme] = useState(themes.data.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode) => {
    setToLS("theme", mode);
    setTheme(mode);
  };

  const setThemeTwo = (mode) => {
    return themes.data[mode];
  };

  return { theme, themeLoaded, setMode, setThemeTwo };
};
