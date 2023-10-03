import { useEffect, useContext } from "react";
import { ContextApp } from "../Context";

function useDarkMode() {
  const { setDarkMode } = useContext(ContextApp);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const savedDarkMode = localStorage.getItem("darkMode");
    setDarkMode(
      savedDarkMode === null ? prefersDarkMode : savedDarkMode === "true"
    );
  }, [setDarkMode]);
}

export default useDarkMode;
